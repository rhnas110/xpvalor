export let VALORANTBASEURLAPI: string = "https://valorant-api.com/v1/";

async function getAllAgent() {
  await new Promise(resolve => setTimeout(resolve, 5000))
  const response = await fetch(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP"
  );

  return response.json();
}
async function getAgentByUuid(agentUuid: string | undefined) {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${agentUuid}`
  );

  return response.json();
}

export { getAllAgent, getAgentByUuid };
