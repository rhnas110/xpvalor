import AuthLayout from "@/components/auth/authLayout";
import LoginForm from "@/components/auth/form/loginForm";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    return redirect("/");
  }
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
