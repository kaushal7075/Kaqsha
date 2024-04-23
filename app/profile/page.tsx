"use client";
import Link from "next/link";
import { SetStateAction, useState } from "react";

const ProfileSelector = () => {
  const [profileType, setProfileType] = useState("");

  const handleProfileChange = (type: any) => {
    setProfileType(type);
  };

  return (
    <div className="flex flex-col items-center">
      <Link href={"/Schoolstudent"}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded m-2 transition duration-300 transform hover:scale-110 flex-1"
          onClick={() => handleProfileChange("School")}
        >
          School Student
        </button>
      </Link>
      <Link href={"/Collegestudent"}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded m-2 transition duration-300 transform hover:scale-110 flex-1"
          onClick={() => handleProfileChange("College")}
        >
          College Student
        </button>
      </Link>
      <Link href={"/Workingprofessional"}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded m-2 transition duration-300 transform hover:scale-110 flex-1 "
          onClick={() => handleProfileChange("Working Professional")}
        >
          Working Professional
        </button>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mt-10 mb-10 outline outline-2 outline-offset-2 ... bg-gray-900">
        Profile
      </h1>
      <ProfileSelector />
    </div>
  );
}
