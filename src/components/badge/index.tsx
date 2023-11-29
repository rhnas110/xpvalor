const GreenBadge = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const c = className;
  return (
    <span
      className={`bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ${c}`}
    >
      {text}
    </span>
  );
};

const RedBadge = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const c = className;
  return (
    <span
      className={`bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 ${c}`}
    >
      {text}
    </span>
  );
};

export { GreenBadge, RedBadge };
