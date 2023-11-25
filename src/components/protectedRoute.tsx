import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const ProtectedRoute = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return redirect("/");
  }
  return <>{children}</>;
};

export default ProtectedRoute;
