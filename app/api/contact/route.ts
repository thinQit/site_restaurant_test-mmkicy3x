import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

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
    const { name, email, phone, topic, message } = parsed.data;

    const subject = `[Bella Vista] Contact Form: ${topic}`;
    const text = [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Topic: ${topic}`,
      "",
      "Message:",
      message,
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
        message: "Message sent. Thanks—our team will reply within 1–2 business days.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn’t send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
