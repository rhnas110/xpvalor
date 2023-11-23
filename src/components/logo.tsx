import Image from "next/image";
import logo from "@/assets/xp.png";

const Logo = ({ className }: { className?: string }) => {
  const c = className || "w-auto h-auto";
  return (
    <Image
      priority
      src={logo}
      alt={"XPValor Logo"}
      width={500}
      height={500}
      className={c}
    />
  );
};

export default Logo;
