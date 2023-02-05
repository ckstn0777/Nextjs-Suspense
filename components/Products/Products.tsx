function Product() {
  return (
    <div className="card card-compact w-52 bg-base-100 shadow-xl justify-self-center">
      <figure className="bg-slate-50">
        <img
          src="https://thumbnail10.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/2b96/fe7e61631cc663223543f2578b71872e6c8318bca2d685cd286bc7040aea.jpg"
          alt="Shoes"
          className="h-32 object-cover"
        />
      </figure>
      <div className="card-body">
        <p>해남 꿀고구마 호박고구마</p>
        <p>17,000원</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">구매하기</button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-8 my-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <Product key={index} />
      ))}
    </div>
  )
}
