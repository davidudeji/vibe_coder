"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignOutNav() {
  return (
    <nav className="w-full bg-zinc-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="text-lg font-semibold">Vibe Coder Editor</div>
          <div>
            <button
              onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}
              className="inline-flex items-center px-3 py-1.5 bg-white text-zinc-700 rounded hover:opacity-90"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
