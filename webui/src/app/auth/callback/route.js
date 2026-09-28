import { NextResponse } from "next/server";

export async function GET(request) {
  const token = new URL(request.url).searchParams.get("token");
  const response = NextResponse.redirect(new URL("/", request.url));

  if (token) {
    response.cookies.set("auth_token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}