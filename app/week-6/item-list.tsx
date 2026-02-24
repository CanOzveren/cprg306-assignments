"use client";

import { useState } from "react";

type Item = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function ItemList({ items }: { items: Item[] }) {
  const [sortBy, setSortBy] = useState<"name" | "category" | "grouped">("name");

  const sortByName = () => {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  };

  const sortByCategory = () => {
    return [...items].sort((a, b) => a.category.localeCompare(b.category));
  };

  const groupByCategory = () => {
    const grouped = [...items].reduce((acc: Record<string, Item[]>, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    Object.keys(grouped).forEach((category) => {
      grouped[category] = [...grouped[category]].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });

    return grouped;
  };

  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-blue-100 p-10 shadow-xl">
      <h2 className="mb-8 text-center text-2xl font-semibold text-slate-800">
        Sort Items By Name or Category
      </h2>

      {/* buttons */}
      <div className="mb-10 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`rounded-lg px-5 py-2 text-sm font-medium transition
            ${
              sortBy === "name"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
            }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`rounded-lg px-5 py-2 text-sm font-medium transition
            ${
              sortBy === "category"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
            }`}
        >
          Sort by Category
        </button>

        <button
          type="button"
          onClick={() => setSortBy("grouped")}
          className={`rounded-lg px-5 py-2 text-sm font-medium transition
            ${
              sortBy === "grouped"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
            }`}
        >
          Group by Category
        </button>
      </div>

      {/* grouped */}
      {sortBy === "grouped" ? (
        <div className="space-y-8">
          {Object.entries(groupByCategory()).map(([category, groupItems]) => (
            <div key={category}>
              <h3 className="mb-3 text-lg font-semibold capitalize text-slate-700">
                {category}
              </h3>

              <ul className="space-y-2 rounded-xl bg-white p-5 shadow">
                {groupItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between rounded-lg bg-slate-50 px-4 py-3 text-slate-700"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium">{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {(sortBy === "name" ? sortByName() : sortByCategory()).map((item) => (
            <li
              key={item.id}
              className="flex justify-between rounded-lg bg-white p-4 shadow text-slate-700"
            >
              <span>{item.name}</span>
              <span className="capitalize text-slate-500">{item.category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
