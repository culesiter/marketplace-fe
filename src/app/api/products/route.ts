import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Products API" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Product created", data: body });
}
