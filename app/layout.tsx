import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header1'
import Link from 'next/link'
import MenuFooter from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mambo App',
  description: 'Modern ECommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer drawer-mobile">
            <DrawerButton />
            <div className="drawer-content flex flex-col">
              {/* Contenido principal */}
              <div className="flex-1">
                <Header />
                {children}
              </div>

              {/* Footer fijo */}
              <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0 w-full">
                {/* Contenido del footer */}
                <div className="navbar justify-center bg-base-300">
                  <MenuFooter />
                </div>
              </footer>
            </div>

            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
