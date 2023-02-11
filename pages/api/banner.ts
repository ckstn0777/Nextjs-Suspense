import type { NextApiRequest, NextApiResponse } from 'next'
import { Banner } from '@prisma/client'
import { prisma } from '@/lib/db/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Banner[] | { error: string }>
) {
  if (req.method == 'GET') {
    try {
      const banner = await prisma.banner.findMany()
      return res.status(200).json(banner)
    } catch (e) {
      res.status(500).json({ error: 'banner api error' })
    }
  }
}
