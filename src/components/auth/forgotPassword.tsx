import Link from "next/link";

const ForgotPassword = ({ className }: { className?: string }) => {
  const c = className;
  return (
    <Link href="/auth/forgotpassword" className={`${c}`}>
      Forgot Password?
    </Link>
  );
};

export default ForgotPassword;
