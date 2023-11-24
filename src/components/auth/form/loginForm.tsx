"use client";
import ButtonPrimary from "@/components/button";
import Link from "next/link";
import ForgotPassword from "../forgotPassword";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toastError, toastSuccess } from "@/lib/toast";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const { status } = useSession();

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (!response || response.ok !== true) {
        return toastError("Email or Password is Incorrect");
      } else {
        router.refresh();
        return toastSuccess("Login Success");
      }
    } catch (error) {
      console.log(error);
      return toastError(error?.message);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/");
    }
  }, [status, router]);
  return (
    <>
      <h1 className="pb-12 text-2xl font-bold text-center">
        Login into your account
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              placeholder=" "
              className={cn(
                `block rounded-md px-2.5 pb-2 pt-4 w-full text-base border-0 border-b-2 border-logoSecondary appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer`,
                {
                  "border-logo": errors.email,
                }
              )}
              {...login("email")}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
            >
              Email address
            </label>
            {errors.email && (
              <p className="text-sm italic text-logo mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="relative mb-6">
            <input
              type={"password"}
              id="password"
              placeholder=" "
              className={cn(
                `block rounded-md px-2.5 pb-2 pt-4 w-full text-base border-0 border-b-2 border-logoSecondary appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer`,
                {
                  "border-logo": errors.password,
                }
              )}
              {...login("password")}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
            >
              Password
            </label>
            {errors.email && (
              <p className="text-sm italic text-logo mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          {/* <div className="text-center">
            <ForgotPassword className="hover:underline" />
          </div> */}
          <ButtonPrimary
            text="Login Now"
            className="mt-6 w-full"
            type="submit"
          />
        </div>
      </form>

      <div className="flex flex-row justify-between items-center gap-4 my-6">
        <hr className="my-8 h-px w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100" />
        <span>OR</span>
        <hr className="my-8 h-px w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100" />
      </div>

      <p className="text-sm flex gap-2 justify-center">
        Don’t Have An Account?
        <Link
          href="/auth/register"
          className="text-logo font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
