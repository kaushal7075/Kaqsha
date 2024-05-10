import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails";
import { Resend } from "resend";

const resend = new Resend("re_EWgNu5B6_7BEwEd2uyFaZtjtqfgoALHfL");

export async function POST(request: Request, res: Response) {
  // rate limit
  // authorization

  const { email, userFirstname } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Kaqsha <team@kaqsha.com>",
    to: [email],
    subject: "Parent Registration",
    html: render(WelcomeTemplate({ userFirstname })),
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email sent successfully" });
}
