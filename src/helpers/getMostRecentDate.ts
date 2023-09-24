// import type { Post } from "@interfaces/SanitySchema";

/**
 * @description take a list of posts and return the most recent date
 * @param posts
 * @returns
 */
const getMostRecentDate = (posts: any[]) => {
  const [mostRecentDate] = posts
    .map((post) => {
      return post._updatedAt;
    })
    .reverse();

  return mostRecentDate;
};

export default getMostRecentDate;
