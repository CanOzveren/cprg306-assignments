import ItemsSort from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-6 text-3xl font-bold text-white">Shopping List</h1>
      <ItemsSort />
    </main>
  );
}
