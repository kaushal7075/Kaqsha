// ConnectPage.tsx
"use client";
// import { useRouter } from "next/navigation";

// import { useState } from "react";
// import z from "zod";
// import { createClient } from "@/utils/supabase/client";
// import DOBPicker from "../components/Dobcompo";

// // Define Zod schema for school student
// const SchoolStudentSchema = z.object({
//   grade: z.string(),
//   school_name: z.string(),
//   city: z.string(),
// });

// // Define Zod schema for college student
// const CollegeStudentSchema = z.object({
//   college_name: z.string(),
//   degree: z.string(),
//   stream: z.string(),
// });

// const ConnectPage: React.FC = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     grade: "",
//     school_name: "",
//     city: "",
//     college_name: "",
//     degree: "",
//     stream: "",
//     date_of_birth: null as Date | null,
//   });

//   const handleDOBChange = (date: Date | null) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       date_of_birth: date,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       let schema;
//       let tableName;
//       let insertData;

//       // Determine which schema and table to use based on user role
//       const userRole = router.query.userRole as string;
//       if (userRole === "school") {
//         schema = SchoolStudentSchema;
//         tableName = "school_student_table";
//       } else if (userRole === "college") {
//         schema = CollegeStudentSchema;
//         tableName = "college_student_table";
//       } else {
//         throw new Error("Invalid user role");
//       }

//       // Validate form data
//       const validatedData = schema.parse(formData);

//       // Insert data into Supabase table
//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from(tableName)
//         .insert(validatedData)
//         .select();

//       if (error) {
//         throw error;
//       }

//       console.log("Data inserted successfully:", data);

//       // Redirect the user after successful submission
//       router.push("/Welcome");
//     } catch (error) {
//       console.error("Error inserting data:", error);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h1>Welcome to the Connect Section!</h1>
//       <p>Please fill in your basic details to get started.</p>
//       <form onSubmit={handleSubmit}>
//         {/* School student form section */}
//         <div>
//           <h2>School Student Details</h2>
//           <input
//             type="text"
//             name="grade"
//             value={formData.grade}
//             onChange={handleChange}
//             placeholder="Grade"
//           />
//           <input
//             type="text"
//             name="school_name"
//             value={formData.school_name}
//             onChange={handleChange}
//             placeholder="School Name"
//           />
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="City"
//           />
//         </div>

//         {/* College student form section */}
//         <div>
//           <h2>College Student Details</h2>
//           <input
//             type="text"
//             name="college_name"
//             value={formData.college_name}
//             onChange={handleChange}
//             placeholder="College Name"
//           />
//           <input
//             type="text"
//             name="degree"
//             value={formData.degree}
//             onChange={handleChange}
//             placeholder="Degree"
//           />
//           <input
//             type="text"
//             name="stream"
//             value={formData.stream}
//             onChange={handleChange}
//             placeholder="Stream"
//           />
//         </div>

//         {/* Date of Birth */}
//         <div>
//           <h2>Date of Birth</h2>
//           <DOBPicker
//             value={formData.date_of_birth}
//             onChange={handleDOBChange}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ConnectPage;
const page = () => {
  return <div> Connect page</div>;
};
export default page;
