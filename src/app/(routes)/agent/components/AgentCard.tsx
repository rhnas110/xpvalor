"use client";
import Image from "next/image";
import Link from "next/link";

const AgentCard = ({ agent }: { agent: any }) => {
  return (
    <Link
      className="relative flex rounded-lg overflow-hidden bg-neutral-950 shadow-xl hover:shadow-white/10 hover:scale-105 min-w-[200px] lg:max-w-[200px] xl:max-w-[250px] max-h-[450px] group transition duration-500"
      key={agent?.uuid}
      href={`/agent/${agent?.uuid}`}
    >
      <figure className="relative w-full h-full">
        <Image
          src={agent?.fullPortrait}
          alt={agent?.displayName}
          width={500}
          height={500}
          className="object-center object-cover absolute scale-125 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition duration-300"
        />
        <Image
          src={agent?.background}
          alt={agent?.displayName + "background"}
          width={500}
          height={500}
          className="object-center object-cover"
        />
      </figure>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black group-hover:scale-0 group-hover:opacity-0"></div>
      <div className="text-[#fd4556] absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:scale-0 group-hover:opacity-0">
        <h2 className="text-lg font-bold">{agent?.displayName}</h2>
        <p className="text-white/75">{agent?.role?.displayName}</p>
      </div>
    </Link>
  );
};

export default AgentCard;
