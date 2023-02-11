import Head from 'next/head'
import BasicLayout from '@/components/BasicLayout'
import Banner from '@/components/Banner'
import Products from '@/components/Products'
import UserInfo from '@/components/UserInfo'
import Alarm from '@/components/Alarm'
import { GetServerSideProps } from 'next'
import { Banner as BannerType } from '@prisma/client'

export default function Home({ banners }: { banners: BannerType[] }) {
  return (
    <>
      <Head>
        <title>Nextjs Suspense</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <Banner banners={banners} />

        <div className=" max-w-4xl mx-auto grid grid-rows-1 grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold text-center mt-8">
              추천 상품 목록
            </h1>

            <Products />

            <div className="btn-group w-100 flex justify-center mb-8">
              <button className="btn btn-active">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn">4</button>
            </div>
          </div>

          <div className="col-span-1 grid grid-rows-2 grid-cols-1 gap-5">
            <div>
              <h1 className="text-2xl font-bold text-center mt-8">유저 정보</h1>
              <UserInfo />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-center mb-4">알림</h1>
              <Alarm />
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/banner')
  const banners = await res.json()

  console.log('banner', banners)

  return {
    props: {
      banners,
    },
  }
}
