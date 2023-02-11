import { Banner as BannerType } from '@prisma/client'

export default function Banner({ banners }: { banners: BannerType[] }) {
  return (
    <div className="carousel w-full">
      {banners?.map((banner, idx) => (
        <div
          id={`slide${banner.id}`}
          className="carousel-item relative w-full"
          key={banner.id}
        >
          <img src={banner.imageUrl} className="w-full h-64 object-cover" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={
                idx == 0
                  ? `#slide${banners[banners.length - 1].id}`
                  : `#slide${banner.id - 1}`
              }
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={
                idx == banners.length - 1
                  ? `#slide${banners[0].id}`
                  : `#slide${banner.id + 1}`
              }
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
