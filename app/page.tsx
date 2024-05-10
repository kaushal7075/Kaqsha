import Header from "@/components/Header/Header";
import { Hero } from "@/components/Hero";
import { createClient } from "@/utils/supabase/client";

export default async function Home() {
  const supabase = createClient();

  const products = [];
  const { data, error } = await supabase
    .from("user_secondary_details")
    .select();
  console.log({ data });
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
