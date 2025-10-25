import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";

const rateLimitMap = new Map<string, number[]>();

const WINDOW = 10 * 60 * 1000;
const MAX_REQUESTS = 2;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  const recentRequests = timestamps.filter((t) => now - t < WINDOW);

  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const safeName = sanitizeHtml(name, {
    allowedTags: [],
    allowedAttributes: {},
  });
  const safeEmail = sanitizeHtml(email, {
    allowedTags: [],
    allowedAttributes: {},
  });
  const safeSubject = sanitizeHtml(subject, {
    allowedTags: [],
    allowedAttributes: {},
  });
  const safeMessage = sanitizeHtml(message, {
    allowedTags: [],
    allowedAttributes: {},
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_APP_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: safeEmail,
      to: process.env.EMAIL_USER,
      subject: safeSubject || `New message from ${safeName}`,
      text: safeMessage,
      html: `<p>${safeMessage}</p><p>From: ${safeName} (${safeEmail})</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
