// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler from "@/libs/server/withHandler";
import { IProduct } from "@/libs/types";
import type { NextApiRequest, NextApiResponse } from "next";

export type ProductListResponse = {
  ok: boolean;
  data: IProduct[];
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductListResponse>
) {
  const { limit } = req.query as { limit: string };

  const searchParams = new URLSearchParams({
    limit: limit || "10",
  });

  const data = await (
    await fetch(`${process.env.FAKESTORE_BASE_URL}/products?${searchParams}`)
  ).json();

  res.status(200).json({ ok: true, data });
}

export default withHandler({ methods: ["GET"], handler });
