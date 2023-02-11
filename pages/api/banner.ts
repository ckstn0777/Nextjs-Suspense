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
      //const banner = await prisma.$queryRaw`SELECT * FROM "Banner"'`
      // const banner: Banner[] =
      //   await prisma.$queryRaw`SELECT * FROM Banner, pg_sleep(5);`
      //await prisma.$queryRaw`SELECT pg_sleep(5);`

      // sleep 5 secondes
      await new Promise((resolve) => setTimeout(resolve, 5000))

      return res.status(200).json(banner)
    } catch (e) {
      console.log('error', e)
      res.status(500).json({ error: 'banner api error' })
    }
  }
}
