import { NextResponse } from "next/server";

// Checks the admin password on the server, so it never ships in the website's code.
// Set ADMIN_PASSWORD in Vercel (Project > Settings > Environment Variables), then redeploy.
export async function POST(request: Request) {
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return NextResponse.json({ ok: false, reason: "not-configured" }, { status: 503 });
  }

  let password = "";
  try {
    const body = (await request.json()) as { password?: unknown };
    if (typeof body.password === "string") password = body.password;
  } catch {
    // ignore bad JSON; falls through as a wrong password
  }

  const ok = password.length > 0 && password === expected;
  return NextResponse.json({ ok }, { status: ok ? 200 : 401 });
}
