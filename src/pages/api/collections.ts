import { getCollections } from "@/lib/data";
import { Category, Collection } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Collection[]>
) {
  const collections = getCollections();
  res.status(200).json(collections);
}
