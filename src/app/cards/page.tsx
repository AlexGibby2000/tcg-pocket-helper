import CardGrid from "@/components/CardGrid";
import CardSearch from "@/components/CardSearch";
import CardFilter from "@/components/CardFilter";

const mockCards = [
  {
    id: "1",
    name: "Pikachu",
    imageUrl: "/mock/pikachu.jpg",
    type: "Electric",
    rarity: "Common",
  },
  {
    id: "2",
    name: "Charizard",
    imageUrl: "/mock/charizard.jpg",
    type: "Fire",
    rarity: "Rare",
  },
  // Add more mock cards as needed
];
export default function CardBrowserPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Card Browser</h1>
        <CardSearch />
        <CardFilter />
        <CardGrid cards={mockCards} />
      </main>
    </div>
  );
}
