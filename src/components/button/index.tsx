"use client";
const ButtonPrimary = ({
  text,
  className,
  ...rest
}: {
  text: string;
  className?: string;
  [rest: string]: any;
}) => {
  const c = className || "w-full";
  return (
    <button
      className={`text-white flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap border-2 rounded-full shadow-sm border-logo focus:outline-none bg-logo hover:bg-logo/90 ${c}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
