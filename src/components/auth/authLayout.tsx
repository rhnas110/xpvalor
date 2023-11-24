import { ReactNode } from "react";
import { Logo } from "../logo";
import "./authLayout.css";

const AuthLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="grid md:grid-cols-[minmax(0,60%)_minmax(0,40%)] w-screen h-screen">
      <div className="auth-layout-image w-full h-full md:block hidden">
        <Logo className="absolute w-60 top-10 left-8" />
      </div>
      <div className="py-2 px-2 sm:px-4">
        <div className="py-12 max-w-[400px] sm:max-w-[450px] h-auto mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
