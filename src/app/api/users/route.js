import { retrieveData } from "@/lib/firebase/serviceFirebase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await retrieveData("users");

  return NextResponse.json({
    status: 200,
    message: "success",
    data: data,
  });
}
