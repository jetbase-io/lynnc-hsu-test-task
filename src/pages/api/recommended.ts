import { getRecommendedProducts } from "@/lib/data";
import { Product } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const recommended = getRecommendedProducts();
  res.status(200).json(recommended);
}
