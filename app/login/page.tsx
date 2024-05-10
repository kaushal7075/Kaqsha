import Header from "@/components/Header/Header";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import OAuthForm from "../components/OAuthForm";
import { headers } from "next/headers";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  const signIn = async (formData: FormData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();
    // const { error } = await supabase.auth.signInWithOtp({
    //   email,
    //   options: {
    //     // set this to false if you do not want the user to be automatically signed up
    //     shouldCreateUser: true,
    //     emailRedirectTo: `${origin}/auth/callback`,
    //   },
    // });

    // const { error } = await supabase.auth.signInWithOtp({
    //   email: "kaushalrai415@gmail.com",
    //   options: {
    //     shouldCreateUser: false,
    //   },
    // });

    // const { error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // });
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <div>
      <Header />

      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
      >
        Home
      </Link>

      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          action={signIn}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
            Sign In
          </button>
          <OAuthForm />

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>

        <Link
          href="/forgot-password"
          className="rounded-md no-underline text-indigo-400 text-sm "
        >
          Forgot Password.
        </Link>
        <br />
        <br />
        <Link
          href="/signup"
          className="rounded-md no-underline text-foreground text-sm"
        >
          Don't have an Account? Sign Up
        </Link>
      </div>
    </div>
  );
}
