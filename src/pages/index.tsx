import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { baseURL } from "@/lib/api";
import { SectionSearch } from "@/components/section/search";
import { SectionCategories } from "@/components/section/categories";
import { SectionCollections } from "@/components/section/collections";
import { SectionRecommended } from "@/components/section/recommended";
import { SectionBestSellers } from "@/components/section/bestSellers";
const inter = Inter({ subsets: ["latin"] });

import { Category, Product, Collection } from "@/lib/types";

type Repo = {
  categories: Category[];
  bestSellers: Product[];
  recommended: Product[];
  collections: Collection[];
};
export const getServerSideProps: GetServerSideProps<{
  repo: Repo;
}> = async () => {
  const urls = [
    `${baseURL}/categories`,
    `${baseURL}/best-sellers`,
    `${baseURL}/recommended`,
    `${baseURL}/collections`,
  ];
  console.log(urls);
  // Get all the responses in parallel using Promise.all
  const [
    categoriesRes,
    bestSellersRes,
    recommendedRes,
    collectionsRes
  ] =
    await Promise.all(urls.map((url) => fetch(url)));
  const [categories,
    bestSellers,
    recommended,
    collections
  ] = await Promise.all(
    [
      categoriesRes.json(),
      bestSellersRes.json(),
      recommendedRes.json(),
      collectionsRes.json(),
    ]
  );
  return {
    props: {
      repo: {
        categories,
        bestSellers,
        recommended,
        collections,
      },
    },
  };
};
export default function Home({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(repo);
  return (
    <div className="flex flex-col w-full mx-auto gap-y-6 max-w-7xl ">
      <SectionSearch />
      <SectionCategories categories={repo.categories} />
      <SectionCollections collections={repo.collections} />
      <SectionRecommended products={repo.recommended} />
      <SectionBestSellers products={repo.bestSellers} />
    </div>
  );
}
