import Link from "next/link";
import User from "../User";
import { Button } from "../ui/button";
import classes from "./Header.module.css";

export default async function Header() {
  return (
    <div className={classes.header}>
      <h3>KaQsha</h3>

      <div className="flex  justify-center ml-auto ">
        <Link href={"/profile"}>
          <Button className="flex   	justify-content: flex-end;">Role</Button>
        </Link>

        <Button className="flex   	justify-content: flex-end;">Explore</Button>
        <Button className="flex   	justify-content: flex-end;">Connect</Button>
        <Button className="flex   	justify-content: flex-end;">Learn</Button>
        <Button className="flex   	justify-content: flex-end;">Contact</Button>
        <Button className="flex   	justify-content: flex-end;">About us</Button>
      </div>

      <User />
    </div>
  );
}
