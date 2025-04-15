import Link from "next/link";
export default function HomePage() {
  return (
    <main className="bg-white min-h-screen px-4 py-8 space-y-8">
      <Section title="How It Works" />
      <Section title="Decks" />
      <Section title="About Us" />
    </main>
  );
}

function Section({ title }: { title: string }) {
  return (
    <section className="bg-gray-200 rounded-x1 p-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      Welcome to Pocket Trainer Tactics! We’re a community of Pokémon TCG fans
      building tools to help players compete smarter. Whether you're optimizing
      your deck, browsing top tournament builds, or tracking your collection,
      Pocket Trainer Tactics gives you the edge. With features like AI-driven
      suggestions, deck recommendations based on your collection, and curated
      meta insights, our goal is simple: help you play like a pro, no matter
      your experience level.
    </section>
  );
}
