"use client";

import { useEffect, useState } from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

async function fetchMealIdeas(ingredient: string): Promise<Meal[]> {
  if (!ingredient) return [];

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
      ingredient
    )}`
  );

  if (!res.ok) return [];

  const data = (await res.json()) as { meals: Meal[] | null };
  return data.meals ?? [];
}

export default function MealIdeas({ ingredient }: { ingredient: string }) {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const result = await fetchMealIdeas(ingredient);
      if (!cancelled) setMeals(result);
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [ingredient]);

  return (
    <section className="w-full">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Meal Ideas {ingredient ? `for “${ingredient}”` : ""}
      </h2>

      {!ingredient && (
        <p className="text-zinc-300">Select an item to see meal ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-zinc-300">No meal ideas found.</p>
      )}

      {meals.length > 0 && (
        <ul className="grid gap-4 sm:grid-cols-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="overflow-hidden rounded-lg bg-slate-800 shadow hover:bg-slate-700 transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="h-40 w-full object-cover"
              />

              <div className="p-3 text-white font-medium">{meal.strMeal}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
