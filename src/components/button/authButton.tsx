"use client"
import Link from "next/link";

const AuthButton = () => {
  return (
    <div className="flex gap-x-2">
      <Link
        href="/auth/register"
        className="text-white flex items-center justify-center px-4 py-1 text-base font-medium leading-6 whitespace-no-wrap border-2 rounded-full shadow-sm border-logo focus:outline-none hover:bg-logo"
      >
        Register
      </Link>
      <Link
        href="/auth/login"
        className="text-white flex items-center justify-center px-4 py-1 text-base font-medium leading-6 whitespace-no-wrap border-2 rounded-full shadow-sm border-logo focus:outline-none bg-logo hover:bg-transparent"
      >
        Login
      </Link>
    </div>
  );
};

export default AuthButton;
