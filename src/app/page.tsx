import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Welcome to Pokemon Pocket DeckBuilder!
      </h1>
      <Link href="/browse">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Browse
        </button>
      </Link>
      <Link href="/account">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Account
        </button>
      </Link>
      <p className="mt-4 text-lg">This is a simple Next.js application.</p>
    </main>
  );
}
