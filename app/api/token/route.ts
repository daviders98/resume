import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST() {
  const token = jwt.sign(
    { purpose: "contact_form" },
    process.env.FORM_SECRET!,
    { expiresIn: "1m" }
  );
  return NextResponse.json({ token });
}
