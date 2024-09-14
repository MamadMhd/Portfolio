import { NextResponse } from "next/server";
import connectDb from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
  const { name, lastName, email, phoneNumber, message } = await req.json();
  try {
    await connectDb();
    await Contact.create({ name, lastName, email, phoneNumber, message });
    return NextResponse.json({
      msg: ["درخواست شما با موفقیت ارسال شد"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
        return NextResponse.json({ msg: "خطایی در ارسال درخواست شما رخ داد"})
    }
  }
}
