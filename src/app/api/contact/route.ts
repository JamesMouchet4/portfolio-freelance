import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Body = { name: string; email: string; message: string };

let lastSentAt = 0; // anti-spam simple (mémoire du serveur)

export async function POST(req: Request) {
  const now = Date.now();
  if (now - lastSentAt < 10_000) {
    return NextResponse.json({ ok: false, error: "Rate limited" }, { status: 429 });
  }

  const body = (await req.json()) as Body;

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // Configure SMTP via .env.local
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = "jamesmouchet@hotmail.fr";

  await transporter.sendMail({
    from: process.env.MAIL_FROM || `Portfolio <${process.env.SMTP_USER}>`,
    to,
    replyTo: email,
    subject: `Nouveau message portfolio — ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    html: `
      <h2>Nouveau message (portfolio)</h2>
      <p><b>Nom:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `,
  });

  lastSentAt = now;
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}