"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import styles from "./Explore.module.css";
import { useEffect, useState } from "react";

const ExplorePage: React.FC = () => {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    // Add a delay to show the message after a brief period
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000); // Adjust the delay time as needed
    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);
  const goToMainPage = () => {
    router.push("/MVP/Connect");
  };

  return (
    <div className={styles.container}>
      {/* <p>Welcome to the Explore Page!</p> */}
      {/* Conditional rendering of the message */}
      {showMessage && (
        <div className={styles.message}>
          <p>Congratulations!</p>
          <p>Your age is greater than 18. You can proceed.</p>
        </div>
      )}
      {/* Button to proceed */}
      <Button className={styles.button} onClick={goToMainPage}>
        Proceed
      </Button>
    </div>
  );
};

export default ExplorePage;
