import { config } from "@config";

async function fetchSanity<ReturnType>(
  query: string,
  variables: Record<any, string> | undefined = undefined,
) {
  try {
    const response = await fetch(config.sanityGraphqlEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.SANITY_READ_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await response.json();

    if (result.error) {
      console.error("👨‍🚒", result.error + ": " + result.message);
    }

    return result.data as ReturnType;
  } catch (error) {
    console.error("👨‍🚒", error);
  }
}

export default fetchSanity;
