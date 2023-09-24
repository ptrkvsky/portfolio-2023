import type { BreadcrumbItem } from "@interfaces/BreadcrumbItem";

export function getBreadcrumbItems(post: any) {
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Articles",
      path: "/posts",
    },
    {
      name: post?.categories ? post?.categories[0]?.title : "",
      path: `/categorie/${post?.categories[0]?.slug.current}`,
    },
  ];
  return breadcrumbItems;
}
