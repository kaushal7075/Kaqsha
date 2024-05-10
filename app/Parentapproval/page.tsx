// "use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import styles from "./ParentApprovalPage.module.css";
// import { useRouter } from "next/navigation"; // Import useHistory from react-router-dom

// const ParentApprovalPage: React.FC = () => {
//   const router = useRouter();

//   const [parentEmail, setParentEmail] = useState("");
//   const [emailSent, setEmailSent] = useState(false);

//   const sendEmailToParent = () => {
//     console.log("Email sent to parent:", parentEmail);
//     setEmailSent(true);
//     // Redirect to the registration page after sending the email
//     router.push(
//       `/confirm?message=Check email(${parentEmail}) to continue sign in process`
//     );
//   };

//   const resendEmailToParent = () => {
//     console.log("Resending email to parent:", parentEmail);
//     setEmailSent(true);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.message}>
//         <p>Hey there!</p>
//         <p>Looks like you're under 18.</p>
//         <p>Don't worry, we just need your parent's email to proceed.</p>
//       </div>
//       <div className={styles.emailInput}>
//         <input
//           type="email"
//           placeholder="Enter parent's email"
//           value={parentEmail}
//           onChange={(e) => setParentEmail(e.target.value)}
//         />

//         <Button
//           onClick={emailSent ? resendEmailToParent : sendEmailToParent}
//           className={styles.emailButton}
//         >
//           {emailSent ? "Resend Email" : "Send Email"}
//         </Button>
//         {emailSent && (
//           <span>Email sent! Please check your parent's email.</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ParentApprovalPage;
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import styles from "./ParentApprovalPage.module.css";
import { useRouter } from "next/navigation";

const ParentApprovalPage: React.FC = () => {
  const router = useRouter();
  const [parentEmail, setParentEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const confirmed = queryParams.get("confirmed");
    if (confirmed === "true") {
      router.replace("/registration");
    }
  }, []);
  // fetch(`${process.env.API_URL}/send`)

  const sendEmailToParent = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/parentemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parentEmail,
          userFirstname: "", // Add the user's first name here if needed
        }),
      });

      if (response.ok) {
        setEmailSent(true);
        router.push(
          `/confirm?message=Check email(${parentEmail}) to continue  registration process`
        );
      } else {
        console.error("Failed to send email:", response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error
    }
  };

  const resendEmailToParent = () => {
    console.log("Resending email to parent:", parentEmail);
    setEmailSent(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>Hey there!</p>
        <p>Looks like you're under 18.</p>
        <p>Don't worry, we just need your parent's email to proceed.</p>
      </div>
      <div className={styles.emailInput}>
        <input
          type="email"
          placeholder="Enter parent's email"
          value={parentEmail}
          onChange={(e) => setParentEmail(e.target.value)}
        />

        <Button
          onClick={emailSent ? resendEmailToParent : sendEmailToParent}
          className={styles.emailButton}
        >
          {emailSent ? "Resend Email" : "Send Email"}
        </Button>
        {emailSent && (
          <span>Email sent! Please check your parent's email.</span>
        )}
      </div>
    </div>
  );
};

export default ParentApprovalPage;
