"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import React from "react";

export default function OAuthForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const LoginWithfacebook = () => {
    supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const LoginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={LoginWithGoogle}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={LoginWithfacebook}
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
    </div>
  );
}
