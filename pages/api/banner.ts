import type { NextApiRequest, NextApiResponse } from 'next'
import { Banner } from '@prisma/client'
import { prisma } from '@/lib/db/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Banner[] | { error: string }>
) {
  if (req.method == 'GET') {
    try {
      // const banner = await prisma.banner.findMany()

      // sleep 5 secondes
      // await new Promise((resolve) => setTimeout(resolve, 5000))
      console.log('banner api called')

      const banner: Banner[] = [
        {
          id: 2,
          imageUrl: 'http://source.unsplash.com/r0DusB-OgRM',
          created_at: new Date('2023-02-11T16:26:16.194Z'),
          updated_at: new Date('2023-02-11T16:26:16.194Z'),
        },
        {
          id: 3,
          imageUrl: 'http://source.unsplash.com/4oWSXdeAS2g',
          created_at: new Date('2023-02-11T16:26:16.194Z'),
          updated_at: new Date('2023-02-11T16:26:16.194Z'),
        },
        {
          id: 4,
          imageUrl: 'http://source.unsplash.com/GoKXJaQoLQs',
          created_at: new Date('2023-02-11T16:26:16.194Z'),
          updated_at: new Date('2023-02-11T16:26:16.194Z'),
        },
      ]

      return res.status(200).json(banner)
    } catch (e) {
      console.log('error', e)
      res.status(500).json({ error: 'banner api error' })
    }
  }
}
