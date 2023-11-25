import AuthLayout from "@/components/auth/authLayout";
import RegisterForm from "@/components/auth/form/registerForm";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    return redirect("/");
  }
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
