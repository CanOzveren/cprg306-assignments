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

  async function loadMealIdeas() {
    const result = await fetchMealIdeas(ingredient);
    setMeals(result);
  }

  useEffect(() => {
    loadMealIdeas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredient]);

  return (
    <section className="w-full">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Meal Ideas {ingredient ? `for “${ingredient}”` : ""}
      </h2>

      {!ingredient && (
        <p className="text-zinc-300">Select an item to see meal ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-zinc-300">No meal ideas found.</p>
      )}

      {meals.length > 0 && (
        <ul className="space-y-3">
          {meals.map((m) => (
            <li
              key={m.idMeal}
              className="rounded border border-zinc-700 bg-zinc-950 p-4 text-white"
            >
              {m.strMeal}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
