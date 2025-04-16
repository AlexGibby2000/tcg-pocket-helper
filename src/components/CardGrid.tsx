import Link from "next/link";

type Card = {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  rarity: string;
};

export default function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {cards.map((card) => (
        <Link key={card.id} href={`/cards/${card.id}`}>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-2 cursor-pointer">
            <img
              src={card.imageUrl}
              alt={card.name}
              className="w-full h-auto object-contain rounded"
            />
            <div className="mt-2 text-sm font-semibold text-center">
              {card.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
