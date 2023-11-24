import Image from "next/image";
import logo from "@/assets/xp.png";
import logo_mobile from "@/assets/just-xp.png";

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

const LogoMobile = ({ className }: { className?: string }) => {
  const c = className || "w-auto h-auto";
  return (
    <Image
      priority
      src={logo_mobile}
      alt={"XPValor Logo Mobile"}
      width={500}
      height={500}
      className={c}
    />
  );
};

export { Logo, LogoMobile };
