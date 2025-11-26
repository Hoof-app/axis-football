import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await resend.emails.send({
      from: "Axis Football <sales@axisfootballco.com>",
      to: "sales@axisfootballco.com",
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Group:</strong> ${body.group}</p>
        <p><strong>Target Dates:</strong> ${body.dates}</p>
        <p><strong>Age Group:</strong> ${body.ageGroup}</p>
        <p><strong>Locations:</strong> ${body.locations}</p>
        <p><strong>Goals:</strong><br>${body.goals}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    return new Response("Email failed", { status: 500 });
  }
}
