import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Not the anon key — use the service key for inserts
);

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.type === "user.created") {
    const { id, email_addresses } = body.data;

    await supabase.from("users").insert([
      {
        id: id,
        email: email_addresses[0]?.email_address,
      },
    ]);
  }

  return NextResponse.json({ success: true });
}
