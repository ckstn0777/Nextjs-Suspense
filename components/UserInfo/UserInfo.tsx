export default function UserInfo() {
  return (
    <div className="bg-base-100 rounded-box col-span-3 row-span-3 mx-2 grid w-64 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full svelte-1n6ue57">
      <div className="flex flex-col items-center gap-2">
        <img
          src="https://avatars.githubusercontent.com/u/1024025?v=4"
          alt="avatar"
          className="rounded-full w-24 h-24"
        />
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p className="text-gray-500">
          <span className="font-bold">JohnDoe</span> is a member since
          <time dateTime="2021-01-01">January 2021</time>
        </p>
      </div>
    </div>
  )
}
