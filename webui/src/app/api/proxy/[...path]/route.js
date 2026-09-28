import { NextResponse } from "next/server";
import { cookies } from "next/headers";

async function forward(request, path) {
  const token = (await cookies()).get("auth_token")?.value;
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const targetUrl = `${apiBase}/${path.join("/")}${request.nextUrl.search}`;

  const res = await fetch(targetUrl, {
    method: request.method,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: ["GET", "HEAD"].includes(request.method) ? undefined : await request.text(),
  });

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const data = await res.json().catch(() => null);
    return NextResponse.json(data, { status: res.status });
  } else {
    const buffer = await res.arrayBuffer();
    return new NextResponse(buffer, {
      status: res.status,
      headers: {
        "Content-Type": contentType,
      },
    });
  }
}

export async function GET(request, { params }) {
  const resolvedParams = await params;
  return forward(request, resolvedParams.path);
}
export async function POST(request, { params }) {
  const resolvedParams = await params;
  return forward(request, resolvedParams.path);
}
export async function PUT(request, { params }) {
  const resolvedParams = await params;
  return forward(request, resolvedParams.path);
}
export async function PATCH(request, { params }) {
  const resolvedParams = await params;
  return forward(request, resolvedParams.path);
}
export async function DELETE(request, { params }) {
  const resolvedParams = await params;
  return forward(request, resolvedParams.path);
}
