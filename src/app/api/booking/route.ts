import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface BookingRequest {
  contact_name: string;
  contact_phone: string;
  reservation_date: string;
  reservation_time: string;
  party_size: number;
  special_requests?: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingRequest = await request.json();

    // Validate required fields
    if (
      !body.contact_name?.trim() ||
      !body.contact_phone?.trim() ||
      !body.reservation_date ||
      !body.reservation_time ||
      !body.party_size
    ) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ thông tin." },
        { status: 400 }
      );
    }

    // Validate phone format (Vietnamese)
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneRegex.test(body.contact_phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Số điện thoại không hợp lệ." },
        { status: 400 }
      );
    }

    // Validate date is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const reservationDate = new Date(body.reservation_date);
    if (reservationDate < today) {
      return NextResponse.json(
        { error: "Ngày đặt bàn không hợp lệ." },
        { status: 400 }
      );
    }

    // Validate party size
    const partySize =
      typeof body.party_size === "number"
        ? body.party_size
        : parseInt(String(body.party_size), 10);
    if (isNaN(partySize) || partySize < 1 || partySize > 50) {
      return NextResponse.json(
        { error: "Số lượng khách không hợp lệ." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("customer_reservations")
      .insert({
        customer_id: null,
        reservation_date: body.reservation_date,
        reservation_time: body.reservation_time,
        party_size: partySize,
        status: "pending",
        contact_name: body.contact_name.trim(),
        contact_phone: body.contact_phone.trim(),
        special_requests: body.special_requests?.trim() || null,
        source: "website",
      })
      .select("id, reservation_number")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Đã có lỗi xảy ra. Vui lòng thử lại sau." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      reservation_id: data.id,
      reservation_number: data.reservation_number,
      message: "Đặt bàn thành công! Chúng tôi sẽ liên hệ xác nhận sớm nhất.",
    });
  } catch {
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
