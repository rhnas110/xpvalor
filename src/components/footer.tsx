import { useMemo } from "react";

export const Footer = () => {
  const date = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="p-8">
      <hr className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div className="text-center text-neutral-300">© {date} XPValor.</div>
    </footer>
  );
};
