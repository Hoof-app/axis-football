import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await resend.emails.send({
      from: "Axis Football Co <dgray@axisfootballco.com>",   // ← OFFICIAL SENDER
      to: "dgray@axisfootballco.com",                        // ← RECEIVES THE FORM
      subject: "New Quick Quote Request",
      html: `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${body.firstName || ""} ${body.lastName || ""}</p>
    <p><strong>Email:</strong> ${body.email || ""}</p>
    <p><strong>Telephone:</strong> ${body.telephone || ""}</p>
    <p><strong>Group:</strong> ${body.groupName || ""}</p>
    <p><strong>Role:</strong> ${body.role || ""}</p>
    <h3>Travel Details</h3>
    <ul>
      <li>Total Travelers: ${body.totalTravelers || ""}</li>
      <li>Players: ${body.players || ""}</li>
      <li>Coaches: ${body.coaches || ""}</li>
      <li>Chaperones: ${body.chaperones || ""}</li>
      <li>Age Group: ${body.ageGroup || ""}</li>
      <li>Competitive Level: ${body.competitiveLevel || ""}</li>
      <li>Region: ${body.region || ""}</li>
      <li>Cities: ${body.city1 || ""}, ${body.city2 || ""}, ${body.city3 || ""}</li>
      <li>Start Date: ${body.startDate || ""}</li>
      <li>Return Date: ${body.returnDate || ""}</li>
      <li>Trip Length: ${body.tripLength || ""}</li>
      <li>Departure Airport: ${body.departureAirport || ""}</li>
    </ul>

    <p><strong>Interests:</strong> ${(body.interests || []).join(", ")}</p>

    <p><strong>Other Interests:</strong> ${body.otherInterests || ""}</p>

    <h3>Development Goals</h3>
    <p>${body.developmentGoals || ""}</p>
  `,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("❌ Email sending failed:", e);
    return new Response("Email failed", { status: 500 });
  }
}

