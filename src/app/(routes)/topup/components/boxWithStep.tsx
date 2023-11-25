import { ReactNode } from "react";

const BoxWithStep = ({
  className,
  step_number,
  step_title,
  children,
}: {
  className?: string;
  step_number: string;
  step_title: string;
  children: ReactNode;
}) => {
  const c = className;
  return (
    <div className={`rounded-lg bg-[#1B1818] px-2 ${c}`}>
      <div className="ml-2 mb-2 relative py-1.5">
        <span className="font-bold text-lg absolute -top-3 aspect-square w-10 ring-4 ring-[#1B1818] bg-logo rounded-full flex items-center justify-center">
          {step_number}
        </span>
        <p className="ml-[50px] font-bold text-lg">{step_title}</p>
      </div>
      <div className="pt-2 pb-4">{children}</div>
    </div>
  );
};

export default BoxWithStep;
