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
      <nav className="flex justify-between items-center">
        <div className="flex-1 flex justify-start pl-3">
          <Link href="/search">
            <Image src="/search.svg" alt="Mambo App" width={60} height={60} />
          </Link>
        </div>

        <div className="flex-1 flex justify-center pr-2 pt-2">
          <Link href="/">
            <Image
              src="/MamboIcon.svg"
              alt="Mambo App"
              width={55}
              height={55}
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
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
      </nav>
    </header>
  )
}

export default Header
