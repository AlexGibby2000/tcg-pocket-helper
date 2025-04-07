import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Pocket Trainer Tactics!</h1>
      <h2>About Us</h2>
      <p className="mt-4 text-lg">
        Welcome to Pocket Trainer Tactics! We’re a community of Pokémon TCG fans
        building tools to help players compete smarter. Whether you're
        optimizing your deck, browsing top tournament builds, or tracking your
        collection, Pocket Trainer Tactics gives you the edge. With features
        like AI-driven suggestions, deck recommendations based on your
        collection, and curated meta insights, our goal is simple: help you play
        like a pro, no matter your experience level.
      </p>
    </main>
  );
}
