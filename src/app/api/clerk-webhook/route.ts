import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Received webhook body:", body);

  if (body.type === "user.created") {
    const { id, email_addresses } = body.data;

    const { error } = await supabase.from("users").insert([
      {
        id,
        email: email_addresses[0]?.email_address,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("User inserted into Supabase:", id);
  }

  return NextResponse.json({ success: true });
}
