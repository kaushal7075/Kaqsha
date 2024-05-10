// "use client";
// import Link from "next/link";
// import { SetStateAction, useState } from "react";

// const ProfileSelector = () => {
//   const [profileType, setProfileType] = useState("");

//   const handleProfileChange = (type: any) => {
//     setProfileType(type);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <Link href={"/Schoolstudent"}>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded m-2 transition duration-300 transform hover:scale-110 flex-1"
//           onClick={() => handleProfileChange("School")}
//         >
//           School Student
//         </button>
//       </Link>
//       <Link href={"/Collegestudent"}>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded m-2 transition duration-300 transform hover:scale-110 flex-1"
//           onClick={() => handleProfileChange("College")}
//         >
//           College Student
//         </button>
//       </Link>
//       <Link href={"/Workingprofessional"}>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded m-2 transition duration-300 transform hover:scale-110 flex-1 "
//           onClick={() => handleProfileChange("Working Professional")}
//         >
//           Working Professional
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-3xl text-center font-bold mt-10 mb-10 outline outline-2 outline-offset-2 ... bg-gray-900">
//         Profile
//       </h1>
//       <ProfileSelector />
//     </div>
//   );
// }

"use client";

/// Import the useRouter hook from Next.js
// Import useRouter from next/navigation
import { useRouter } from "next/navigation";

const ProfileSelector = () => {
  // Access the Next.js router
  const router = useRouter();

  // Function to handle profile type change
  const handleProfileChange = async (type: string) => {
    // Construct the query parameter based on the selected profile type
    const queryParam = { profileType: type };

    try {
      // Check if the selected profile type is College
      if (type === "College") {
        // Redirect to the College Student page
        // await router.push("/Collegestudent");

        const queryString = new URLSearchParams(queryParam).toString();
        const fullPath = `/Collegestudent?${queryString}`;
        await router.push(fullPath);
      } else {
        // Construct the full URL with the query parameter
        const queryString = new URLSearchParams(queryParam).toString();
        const fullPath = `/Schoolstudent?${queryString}`;

        // Redirect to the StudentformPage with the query parameter
        await router.push(fullPath);
      }
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Button for School Student */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded m-2 transition duration-300 transform hover:scale-110 flex-1"
        onClick={() => handleProfileChange("School")}
      >
        School Student
      </button>
      {/* Button for College Student */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded m-2 transition duration-300 transform hover:scale-110 flex-1"
        onClick={() => handleProfileChange("College")}
      >
        College Student
      </button>
      {/* Button for Working Professional */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded m-2 transition duration-300 transform hover:scale-110 flex-1 "
        onClick={() => handleProfileChange("Working Professional")}
      >
        Working Professional
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mt-10 mb-10 outline outline-2 outline-offset-2 ... bg-gray-900">
        Profile
      </h1>
      {/* Render the ProfileSelector component */}
      <ProfileSelector />
    </div>
  );
}
