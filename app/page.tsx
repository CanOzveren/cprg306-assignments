import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen p-6 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/istanbul.png')",
      }}
    >
      <h1 className="mb-6 text-2xl font-bold bg-black/60 inline-block px-4 py-2 rounded">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <div className="mt-6 flex flex-col gap-4 w-40">
        <Link
          href="/week-2"
          className="rounded bg-blue-600 px-4 py-2 text-center"
        >
          Week-2
        </Link>

        <Link
          href="/week-3"
          className="rounded bg-green-600 px-4 py-2 text-center"
        >
          Week-3
        </Link>

        <Link
          href="/week-4"
          className="rounded bg-purple-600 px-4 py-2 text-center"
        >
          Week-4
        </Link>
      </div>
    </main>
  );
}
