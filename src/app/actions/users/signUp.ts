"use server";
import { db } from "@/lib/db";
import { generateUsername } from "@/lib/utils";
import bcrypt from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export const signUp = async (body: any) => {
  const { email, password } = userSchema.parse(body);
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    throw new Error("User already exists.");
  }

  const hashPassword = bcrypt.hashSync(password, 10);
  const username = generateUsername(email);

  await db.user.create({
    data: {
      email,
      password: hashPassword,
      username,
    },
  });

  return {
    status: true,
    message: "Register Success",
  };
};
