import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
