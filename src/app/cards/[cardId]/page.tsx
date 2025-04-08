import supabase from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function CardPage({
  params,
}: {
  params: { cardId: string };
}) {
  const cardData = await fetchCardData(params.cardId);
  if (!cardData) return notFound();
  return (
    <div>
      <h1>{cardData.name}</h1>
      {/*Render card data here*/}
    </div>
  );
}

async function fetchCardData(cardId: string) {
  const { data: card, error } = await supabase
    .from("cards")
    .select("*, attacks(*)")
    .eq("id", cardId)
    .single();
  return error ? null : card;
}
