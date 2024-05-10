"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export async function StudentFormAction(prevState: any, formData: FormData) {
  console.log(formData.get("first_name"));
  console.log(formData.get("last_name"));
  console.log(formData.get("gender"));
  console.log(formData.get("city"));
  console.log(formData.get("contact_number"));

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const schema = z.object({
    first_name: z.string().min(4),
    last_name: z.string().min(4),
    gender: z.string().min(4),
    city_id: z.string().min(1),
    contact_number: z.string().regex(phoneRegex, "Invalid Number!"),
    // price: z.string().min(1),
  });

  const validatedFields = schema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    gender: formData.get("gender"),
    city_id: formData.get("city_id"),
    contact_number: formData.get("contact_number"),
  });
  if (!validatedFields.success) {
    // console.log("Error", validatedFields.error);
    // //handle error then return
    return {
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields , Failed to create Product",
    };
    // validatedFields.error;
  }
  const { first_name, last_name, gender, city_id, contact_number } =
    validatedFields.data;

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("user_secondary_details")
      .insert({ first_name, last_name, gender, city_id, contact_number })
      .select();

    console.log({ data });
  } catch (e) {
    return {
      type: "error",
      message: "Database Error: Failed to Create Product.",
    };
  }

  revalidatePath("/");
  redirect("/Dob");
}

export async function DOB(prevState: any, formData: FormData) {}
