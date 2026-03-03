"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

type Item = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

function cleanIngredientName(text: string) {
  const firstPart = text.split(",")[0].trim();
  const noEmoji = firstPart.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF])/g,
    ""
  );
  return noEmoji.trim().toLowerCase();
}

export default function Page() {
  const [items, setItems] = useState<Item[]>(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

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

  function handleItemSelect(item: Item) {
    setSelectedItemName(cleanIngredientName(item.name));
  }

  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-6 text-3xl font-bold text-white">Shopping List</h1>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="lg:w-1/2">
          <div className="flex justify-center mb-6">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="lg:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
