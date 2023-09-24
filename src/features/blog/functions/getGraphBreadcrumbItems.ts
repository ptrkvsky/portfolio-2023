import { slugify } from "@lib/slugify";
import type { Post } from "@interfaces/SanitySchema";
import type { BreadcrumbGraphItem } from "@interfaces/BreadcrumbGraphItem";

export function getGraphBreadcrumbItems(post: Post) {
  const breadcrumbItems: BreadcrumbGraphItem[] = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: post.categories[0]?.title,
      slug: `/categorie/${slugify(post?.categories[0]?.title)}/`,
    },
    {
      label: post.title,
      slug: `/posts/${slugify(post?.slug?.current)}/`,
    },
  ];
  return breadcrumbItems;
}
