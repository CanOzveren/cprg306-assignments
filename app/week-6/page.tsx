"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

type Item = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function Page() {
  const [items, setItems] = useState<Item[]>(itemsData);

  function handleAddItem(newItem: {
    name: string;
    quantity: number;
    category: string;
  }) {
    const itemWithId: Item = {
      ...newItem,
      id: crypto.randomUUID(),
    };
    setItems((prevItems) => [...prevItems, itemWithId]);
  }

  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-6 text-3xl font-bold text-white">Shopping List</h1>

      <div className="flex justify-center mb-6">
        <NewItem onAddItem={handleAddItem} />
      </div>

      <ItemList items={items} />
    </main>
  );
}
