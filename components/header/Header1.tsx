'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import useCartService from '@/lib/hooks/useCartStore'
import { useEffect, useState } from 'react'

const Header = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header>
      <nav>
        <div className="navbar justify-center bg-base-300">
          <div>
            <Link href="/search" className="btn btn-ghost text-lg">
              <Image src="/search.svg" alt="Mambo App" width={60} height={60} />
            </Link>
          </div>

          <div>
            <Link href="/" className="btn btn-ghost text-lg">
              <Image
                src="/MamboApp.svg"
                alt="Mambo App"
                width={120}
                height={120}
              />
            </Link>
          </div>

          <div>
            <Link className="btn btn-ghost rounded-btn" href="/cart">
              <Image src="/cart.svg" alt="Mambo App" width={60} height={60} />

              {mounted && items.length != 0 && (
                <div
                  className="badge badge-secondary ml-[-16px]"
                  style={{
                    backgroundColor: '#ED7400',
                    color: 'white',
                    marginLeft: '-20px',
                    border: 'none',
                  }}
                >
                  {items.reduce((a, c) => a + c.qty, 0)}{' '}
                </div>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
