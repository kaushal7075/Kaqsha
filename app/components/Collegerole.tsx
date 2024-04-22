import Header from "@/components/Header/Header";
import Link from "next/link";

const Collegerole = () => {
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
          //  action={}
        >
          <label className="text-md" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="name"
            placeholder="John doe"
            required
          />
          <label className="text-md" htmlFor="Class">
            Graduation
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="text"
            name="Class"
            placeholder="UG/PG"
            required
          />

          <label className="text-md" htmlFor="City">
            City
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="text"
            name="City"
            placeholder="California"
            required
          />
          <Link href={"/Dob"}>
            <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2 w-full">
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Collegerole;
