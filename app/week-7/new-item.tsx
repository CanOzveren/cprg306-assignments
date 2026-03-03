"use client";

import { useState } from "react";

type NewItemProps = {
  onAddItem: (item: {
    name: string;
    quantity: number;
    category: string;
  }) => void;
};

export default function NewItem({ onAddItem }: NewItemProps) {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [count, setCount] = useState(0);

  const nameIsInvalid = nameTouched && name.trim().length < 2;
  const isDisabled = name.trim().length < 2;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || name.trim().length < 2) return;

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    onAddItem(item);

    setCount((c) => c + 1);

    setName("");
    setNameTouched(false);
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg bg-zinc-900/80 p-6 shadow text-white"
    >
      <h2 className="mb-2 text-center text-xl font-bold">Add New Item</h2>

      <p className="mb-4 text-center text-sm text-gray-300">
        Added Items Count: <span className="font-bold">{count}</span>
      </p>

      <label className="mb-2 block text-center text-sm font-medium">
        Item Name
      </label>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        onBlur={() => setNameTouched(true)}
        className={`mb-2 w-full rounded border bg-zinc-950 px-3 py-2 text-center outline-none
          ${nameIsInvalid ? "border-red-500" : "border-zinc-700"}
          focus:border-zinc-400`}
      />

      {nameIsInvalid && (
        <p className="mb-4 text-center text-sm text-red-500">
          Name must be at least 2 characters.
        </p>
      )}

      <label className="mb-2 block text-center text-sm font-medium">
        Quantity (1–20)
      </label>

      <p className="mb-2 text-center text-sm text-gray-300">
        Current: <span className="font-bold text-white">{quantity}</span>
      </p>

      <div className="mb-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="h-12 w-12 rounded bg-zinc-700 text-2xl font-bold text-white hover:bg-zinc-600"
        >
          –
        </button>

        <button
          type="button"
          onClick={() => setQuantity((q) => Math.min(20, q + 1))}
          className="h-12 w-12 rounded bg-blue-600 text-2xl font-bold text-white hover:bg-blue-500"
        >
          +
        </button>
      </div>

      <label className="mb-2 block text-center text-sm font-medium">
        Category
      </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-6 w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-center outline-none focus:border-zinc-400"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        disabled={isDisabled}
        className="w-full rounded bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500
          disabled:cursor-not-allowed disabled:bg-gray-500"
      >
        Add Item
      </button>
    </form>
  );
}
