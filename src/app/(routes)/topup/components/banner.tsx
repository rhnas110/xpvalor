import Image from "next/image";

import valorant_banner from "@/assets/valorant-banner.webp";
import valorant_logo from "@/assets/valorant-logo.webp";

const Banner = () => {
  return (
    <div className="relative w-full h-[380px] mb-16 sm:mb-20">
      <div className="absolute w-full h-full bg-gradient-to-r from-base via-transparent to-base/80"></div>
      <div className="w-full h-full overflow-hidden select-none">
        <Image
          priority
          src={valorant_banner}
          alt={"Valorant Banner"}
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div className="absolute z-10 left-8 sm:left-24 -bottom-6 sm:-bottom-12 flex gap-x-6 items-center">
        <Image
          priority
          src={valorant_logo}
          alt={"Valorant Logo"}
          width={200}
          height={200}
          className="rounded-2xl object-cover shadow-2xl sm:skew-x-6 w-36 sm:w-48"
        />
        <div className="sm:skew-x-6">
          <h1 className="text-xl md:text-3xl font-bold">Valorant</h1>
          <p className="text-gray-400 font-medium">Riot Games</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
