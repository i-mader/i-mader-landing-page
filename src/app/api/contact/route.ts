// app/api/contact/route.ts
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Mengirim data ke API eksternal
    const response = await axios.post(
      "https://i-mader.tech/api/v1/contact-us/add",
      data
    );
    // Mengembalikan respons dari API eksternal
    return NextResponse.json(response.data);
  } catch (error) {
    // Mengembalikan pesan error jika terjadi kesalahan
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
