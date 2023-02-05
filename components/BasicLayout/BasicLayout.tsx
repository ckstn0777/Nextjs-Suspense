import Link from 'next/link'

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-base-100 border-b boder-base-300">
      <nav className="px-6 max-w-3xl mx-auto">
        <ul className="flex items-center justify-between py-4">
          <li>
            <Link href="/" className="text-2xl font-bold text-primary">
              Chan 마켓
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2023 - All right reserved by 기운찬곰</p>
      </div>
    </footer>
  )
}

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
