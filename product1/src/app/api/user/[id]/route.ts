import { NextResponse } from "next/server";
import data from "../../../../data.json";

export async function GET(req: Request) {
  const url = String(req.url);
  const parts = url.split("/");

  const userId = parts[parts.length - 1];
  try {
    // fetch the user data from the data.json file
    const userData = data.find((user) => user.id === Number(userId));

    return NextResponse.json({
      message: "User data fetched successfully",
      data: userData,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
