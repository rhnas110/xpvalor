export let VALORANTBASEURLAPI: string = "https://valorant-api.com/v1/";

async function getAllAgent() {
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // TESTING FOR LOADING UI
  const response = await fetch(
    `${VALORANTBASEURLAPI}agents?isPlayableCharacter=true`
  );

  return response.json();
}
async function getAgentByUuid(agentUuid: string | undefined) {
  const response = await fetch(`${VALORANTBASEURLAPI}agents/${agentUuid}`);

  return response.json();
}

export { getAllAgent, getAgentByUuid };
