import { getCategories } from "@/lib/data";
import { Category } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  const categories = getCategories();
  res.status(200).json(categories);
}
