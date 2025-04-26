"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signIn("email", { email, callbackUrl: "/" });
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleEmailSignIn} className="flex flex-col gap-2 w-80">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-primary text-white rounded px-3 py-2"
          disabled={loading}
        >
          {loading ? "Sending magic link..." : "Sign in with Magic Link"}
        </button>
      </form>
      <div className="mt-6">
        <button
          className="bg-gray-100 border rounded px-3 py-2"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
