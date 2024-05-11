import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails";
import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);
// const RESEND_API_KEY = "re_EWgNu5B6_7BEwEd2uyFaZtjtqfgoALHfL";
// export async function POST(request: Request, res: Response) {
//   // rate limit
//   // authorization

//   const { email, userFirstname } = await request.json();

//   const { data, error } = await resend.emails.send({
//     from: "Kaqsha <team@kaqsha.com>",
//     to: [email],
//     subject: "Parent Registration",
//     html: render(WelcomeTemplate({ userFirstname })),
//   });

//   if (error) {
//     return Response.json(error);
//   }

//   return Response.json({ message: "Email sent successfully" });
// }
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = "re_EWgNu5B6_7BEwEd2uyFaZtjtqfgoALHfL";

export async function POST() {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Acme <infp@kaqsha.com>",
      to: ["kaushal.rai@evonix.co"],
      subject: "hello world",
      html: "<strong>it works!</strong>",
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}
