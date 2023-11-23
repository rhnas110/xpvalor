import Image from "next/image";

import { getAgentByUuid } from "@/vendor/api/valorant";
import PageWrapper from "@/components/pageWrapper";
import NextBreadcrumb from "@/components/nextBreadcrumb";
import { generateImageIfNull } from "@/lib/utils";

interface IParams {
  agentUuid?: string;
}

const AgentDetail = async ({ params }: { params: IParams }) => {
  const { agentUuid } = params;
  const { data: agent } = await getAgentByUuid(agentUuid);

  return (
    <PageWrapper>
      <NextBreadcrumb
        separator={<span> &gt; </span>}
        activeClasses="text-[#fd4556]"
        containerClasses="flex py-4 border-b-2"
        listClasses="hover:underline mx-2 font-bold"
        capitalizeLinks
        lengthCantMoreThanTen
      />
      <div className="grid lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:gap-4 py-10">
        <div className="relative rounded overflow-hidden">
          <Image
            src={agent?.fullPortrait}
            alt={agent?.displayName}
            width={500}
            height={500}
            className="absolute scale-125 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
          <Image
            src={agent?.background}
            alt={agent?.displayName + "background"}
            width={500}
            height={500}
            className="bg-[#fd4556]"
          />
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="font-bold text-4xl text-[#fd4556]">
              {agent?.displayName}
            </h1>
            <div className="w-12 h-12 bg-[#fd4556] rounded-full flex items-center justify-center">
              <Image
                src={agent?.role?.displayIcon}
                alt={agent?.role?.displayName}
                width={40}
                height={40}
              />
            </div>
          </div>
          <p className="mb-4 opacity-75">{agent?.role?.displayName}</p>
          <p className="mb-8">{agent?.description}</p>

          <div className="flex gap-x-4 flex-wrap gap-y-2">
            {agent?.abilities?.map((abl: any) => {
              return (
                <div className="flex flex-col items-center" key={abl?.slot}>
                  <div className="w-16 h-16 bg-[#fd4556] rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={generateImageIfNull(abl?.displayIcon)}
                      alt={abl?.displayName}
                      width={50}
                      height={50}
                    />
                  </div>
                  <p>{abl?.displayName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AgentDetail;
