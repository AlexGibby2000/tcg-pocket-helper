import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

export default async function CardPage({
  params,
}: {
  params: { cardId: string };
}) {
  const card = await Prisma.card.findUnique({
    where: { id: params.cardId },
    include: { attacks: true },
  });
  if (!card) return notFound();
  return (
    <div>
      <h1>{card.name}</h1>
      {/*Render card data here*/}
    </div>
  );
}
