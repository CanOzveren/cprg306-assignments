import NewItem from "./new-item";

export default function Page() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/istanbul.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <NewItem />
      </div>
    </main>
  );
}
