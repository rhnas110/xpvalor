"use client";
import { toastSuccess } from "@/lib/toast";
import { signOut } from "next-auth/react";

const SignOut = ({ className }: { className?: string }) => {
  const c = className;
  function handleSignOut() {
    signOut({ callbackUrl: "/", redirect: true });
    return toastSuccess("Sign Out Success");
  }
  return (
    <button className={c} onClick={() => handleSignOut()}>
      Sign Out
    </button>
  );
};

export default SignOut;
