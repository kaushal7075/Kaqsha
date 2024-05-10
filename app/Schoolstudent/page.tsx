"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
// import SubmitButton from "../components/submit-button";
import { StudentFormAction } from "../action";
import { createClient } from "@/utils/supabase/client";

import z from "zod";
import { useRouter } from "next/navigation";
import DOBPicker from "../components/Dobcompo";

const StudentSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  gender: z.string(),

  city: z.string(),
  // .refine((val) => !Number.isNaN(parseInt(val, 10)), {
  //   message: "Expected number, received a string",
  // }),

  contact_number: z.string(),

  date_of_birth: z.date(),
});

const initialState = {
  message: "",
  errors: null,
};

const StudentformPage: React.FC = () => {
  const [state, formAction] = useFormState<any>(
    StudentFormAction as any,
    initialState
  );
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",

    city: "",
    contact_number: "",
    date_of_birth: null as Date | null,
  });

  const calculateAge = (dob: Date | null): number | null => {
    if (!dob) return null;
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const [error, setError] = useState(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      const validatedData = StudentSchema.parse(formData);

      // Calculate age
      const age = calculateAge(formData.date_of_birth);

      const params = new URLSearchParams(window.location.search);
      // Access query params
      const profileType = params.get("profileType") || ""; // Get profileType from query params
      const userRoleId = getUserRoleId(profileType);

      if (userRoleId !== null) {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("user_secondary_details")
          .insert([{ ...validatedData, user_role_id: userRoleId }])
          .select();

        if (error) {
          throw error;
        }

        console.log("Data inserted successfully:", data);

        if (age !== null) {
          window.location.href = age < 18 ? "/Parentapproval" : "/Ageabove";
        } else {
          console.error("Invalid date of birth.");
        }
      } else {
        console.error("Invalid profile type:", profileType);
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDOBChange = (date: Date | null) => {
    if (date) {
      setFormData((prevData) => ({
        date_of_birth: date,
        first_name: prevData.first_name,
        last_name: prevData.last_name,
        gender: prevData.gender,
        city: prevData.city,
        contact_number: prevData.contact_number,
      }));
    }
  };

  const getUserRoleId = (profileType: string): number | null => {
    switch (profileType) {
      case "School":
        return 1;
      case "College":
        return 2;
      case "Working Professional":
        return 3;
      default:
        return null;
    }
  };
  return (
    <div className="px-12 pt-24 pb-12 min-h-screen max-w-[100rem] mx-auto flex gap-56">
      <div>
        <h2 className="text-2xl lg:text-4xl mb-6 uppercase pt-12">
          Student Basic Details!
        </h2>
        <p className="text-xl">Enter details in this form to start.</p>
      </div>
      <div className="mx-auto h-full p-12 rounded-lg border-2 border-gray-500 border-opacity-10 shadow-lg bg-gray-953 w-full">
        {state?.type === "error" && (
          <p className="text-lg mb-2 bg-green-951 border-2 border-gray-300 rounded-md p-2 my-4">
            {state.message}
          </p>
        )}

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-2 animate-in flex-1 flex flex-col justify-center gap-2 text-foreground">
            <label htmlFor="first_name" className="text-md block mb-2">
              First Name
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6 w-full"
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            {state?.errors?.first_name && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.first_name.join(",")}
              </span>
            )}
          </div>

          <div className="mb-6 text-md">
            <label htmlFor="last_name" className="block mb-2">
              Last Name
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6 w-full"
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            {state?.errors?.last_name && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.last_name.join(",")}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="block mb-2">Gender</label>
            <div className="flex items-center mb-6">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <label htmlFor="male" className="ml-2">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="ml-4"
              />
              <label htmlFor="female" className="ml-2">
                Female
              </label>
            </div>
            {state?.errors?.gender && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.gender.join(",")}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="block mb-2">Date of Birth</label>
            <DOBPicker
              value={formData.date_of_birth}
              onChange={handleDOBChange}
            />
            {/* Error handling for date of birth */}
          </div>

          <div className="mb-2">
            <label htmlFor="city" className="block mb-2">
              City
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6 w-full"
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {state?.errors?.city && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.city.join(",")}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="contact_number" className="block mb-1">
              Contact Number
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6 w-full"
              id="contact_number"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
            />
            {state?.errors?.contact_number && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.contact_number.join(",")}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>

          {/* <SubmitButton /> */}
        </form>

        {/* <DOBAgeCalculator dob={formData.date_of_birth} /> */}
      </div>
    </div>
  );
};

export default StudentformPage;
