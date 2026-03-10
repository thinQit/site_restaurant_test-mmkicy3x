import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

function generateReservationReference(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BV-${timestamp}-${random}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid request data.",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const hostEmail = process.env.HOST_EMAIL_TO ?? "ciao@bellavistakitchen.com";
    const {
      name,
      email,
      phone,
      date,
      time,
      partySize,
      seating,
      occasion,
      notes,
    } = parsed.data;

    const reference = generateReservationReference();
    const subject = `[Bella Vista] Reservation Request (${reference})`;
    const text = [
      "New reservation request",
      "",
      `Reference: ${reference}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Party Size: ${partySize}`,
      `Seating Preference: ${seating}`,
      `Occasion: ${occasion || "None"}`,
      "",
      "Notes:",
      notes || "N/A",
    ].join("\n");

    await sendEmail({
      to: hostEmail,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json(
      {
        ok: true,
        reference,
        message: "Reservation request received. Please check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json(
      {
        ok: false,
        reference: "",
        message: "Something went wrong. Please try again or call us at (415) 555-0138.",
      },
      { status: 500 }
    );
  }
}
