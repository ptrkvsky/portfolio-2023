import { client } from "@lib/sanityClient";

export default async function getPost(refPost: string) {
  const query = `*[_id==$refPost]`;
  const params = {
    refPost,
  };

  try {
    const result = await client.fetch(query, params);
    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.dir(error, { depth: null });
    // console.error('👨‍🚒 error', error.body.error);
    return {
      error: error.res,
    };
  }
}
