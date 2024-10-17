import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_GMAIL_USER,
    pass: process.env.SMTP_GMAIL_APP_PASSWORD,
  },
});

// Verify connection configuration (optional)S
transporter.verify((error, success) => {
  if (error) {
    console.log("Error with email configuration: ", error);
  } else {
    console.log("Email service ready to send messages");
  }
});

export { transporter };
