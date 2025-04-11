import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Must be the service role key
);

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("Received Clerk webhook:", JSON.stringify(body, null, 2)); // Optional

  if (body.type === "user.created") {
    const { id, email_addresses } = body.data;
    const email = email_addresses?.[0]?.email_address;

    const { error } = await supabase.from("users").insert([
      {
        id,
        email,
      },
    ]);

    if (error) {
      console.error("Error inserting into Supabase:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
