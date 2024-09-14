import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "وارد کردن نام الزامی می‌باشد"],
    minLength: [2, "نام نمیتواند کمتر از 2 کاراکتر باشد"],
    maxLength: [50, "نام نمیتواند بیش از 50 کاراکتر باشد"],
  },
  lastName: {
    type: String,
    required: [true, "وارد کردن نام خانوادگی الزامی می‌باشد"],
    minLength: [2, "نام خانوادگی نمیتواند کمتر از 2 کاراکتر باشد"],
    maxLength: [50, "نام خانوادگی نمیتواند بیش از 50 کاراکتر باشد"],
  },
  email: {
    type: String,
    required: [true, "وارد کردن ایمیل الزامی می‌باشد"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "آدرس ایمیل نامعتر می‌باشد"],
  },
  phoneNumber: {
    type: String,
    required: [true, "وارد کردن شماره تماس الزامی می‌باشد"],
    minLength: [11, "شماره تماس نامعتبر می‌باشد"],
    maxLength: [11, "شماره تماس نامعتبر می‌باشد"],
  },
  message: {
    type: String,
    required: [true, "نوشتن پیام الزامی می‌باشد"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact