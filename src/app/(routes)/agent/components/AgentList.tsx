import AgentCard from "./AgentCard";
import { getAllAgent } from "@/vendor/api/valorant";

const AgentList = async () => {
  const { data: agents } = await getAllAgent();

  return (
    // not yet responsive properly
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-2 place-items-center">
      {agents.map((agent: any) => {
        return <AgentCard agent={agent} key={agent.uuid} />;
      })}
    </div>
  );
};

export default AgentList;
