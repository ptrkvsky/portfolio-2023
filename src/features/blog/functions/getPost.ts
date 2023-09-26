import type { Post } from "@interfaces/SanityGraphql";
import { client } from "@lib/sanityClient";

export default async function getPost(refPost: string) {
  const query = `*[_id==$refPost]`;
  const params = {
    refPost,
  };

  try {
    const result: Post | null = await client.fetch(query, params);
    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error("👨‍🚒 error", error.body.error);
    return null;
  }
}
