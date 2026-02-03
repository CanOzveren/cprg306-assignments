"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [count, setCount] = useState(0);

  const nameIsInvalid = nameTouched && name.trim().length < 2;
  const isDisabled = name.trim().length < 2;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || name.trim().length < 2) {
      alert("Item name must be at least 2 characters.");
      return;
    }

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Name: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`
    );

    // 🔢 COUNT ARTIYOR
    setCount(count + 1);

    // RESET
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

      {/* COUNT GÖSTERİMİ */}
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
        Quantity
      </label>
      <input
        type="number"
        min="1"
        max="99"
        value={quantity}
        required
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="mb-4 w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-center outline-none focus:border-zinc-400"
      />

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
