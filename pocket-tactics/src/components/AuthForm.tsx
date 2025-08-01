"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMagicLink = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Magic link sent! Check your email.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <input
        type="email"
        className="border rounded px-3 py-2"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
        onClick={handleMagicLink}
        disabled={loading || !email}
      >
        {loading ? "Sending..." : "Send Magic Link"}
      </button>
      {message && <p className="text-center text-sm">{message}</p>}
    </div>
  );
}
