"use client";
import ButtonPrimary from "@/components/button";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { signUp } from "@/app/actions/users/signUp";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/lib/toast";

const registerSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type RegisterSchema = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const router = useRouter();
  const { status } = useSession();

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    try {
      const response = await signUp(data);

      if (response.status) {
        toastSuccess(response?.message);
        reset();
        return router.push("/auth/login");
      }
    } catch (error) {
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
        Create your account
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
              {...register("email")}
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
              {...register("password")}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
            >
              Password
            </label>
            {errors.password && (
              <p className="text-sm italic text-logo mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="relative mb-6">
            <input
              type={"password"}
              id="confirmPassword"
              placeholder=" "
              className={cn(
                `block rounded-md px-2.5 pb-2 pt-4 w-full text-base border-0 border-b-2 border-logoSecondary appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer`,
                {
                  "border-logo": errors.confirmPassword,
                }
              )}
              {...register("confirmPassword")}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
            >
              Confirm Password
            </label>
            {errors.confirmPassword && (
              <p className="text-sm italic text-logo mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
          <ButtonPrimary text="Register Now" type="submit" />
        </div>
      </form>

      <div className="flex flex-row justify-between items-center gap-4 my-6">
        <hr className="my-8 h-px w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100" />
        <span>OR</span>
        <hr className="my-8 h-px w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100" />
      </div>

      <p className="text-sm flex gap-2 justify-center">
        Already Have An Account?
        <Link
          href="/auth/login"
          className="text-logo font-semibold hover:underline"
        >
          Sign In
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
