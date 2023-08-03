import { getShippingData } from "@/lib/data";
import { ShippingType } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShippingType[]>
) {
  const shippingData = getShippingData();
  res.status(200).json(shippingData);
}
