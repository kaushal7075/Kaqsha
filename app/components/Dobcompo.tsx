import Header from "@/components/Header/Header";
import Link from "next/link";

const Dob = () => {
  return (
    <div>
      <Header />

      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4 "
      >
        Home
      </Link>

      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          //  action={}
        >
          <label className="text-md" htmlFor="name">
            Enter Your Date Of Birth
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="Dob"
            placeholder="DD/MM/YY"
            required
          />
          <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};
export default Dob;
