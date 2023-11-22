import PageWrapper from "@/components/pageWrapper";
import React, { Suspense } from "react";
import AgentList from "./components/AgentList";
import Loading from "./components/loading";

const AgentPage = async () => {
  return (
    <PageWrapper>
      <div className="pb-10">
        {/* :::HEADER */}
        <header className="text-center py-10 font-bold text-3xl sm:text-4xl">
          Choose Your Agent
        </header>
        {/* :::AGENT LIST */}

        <Suspense fallback={<Loading />}>
          <AgentList />
        </Suspense>
      </div>
    </PageWrapper>
  );
};

export default AgentPage;
