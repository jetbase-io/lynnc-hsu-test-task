import { getBestSellers } from "@/lib/data";
import { Product } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const bestSellers = getBestSellers();
  res.status(200).json(bestSellers);
}
