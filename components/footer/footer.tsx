'use client'
import useCartService from '@/lib/hooks/useCartStore'
import useLayoutService from '@/lib/hooks/useLayout'
import { signIn, signOut, useSession } from 'next-auth/react'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const MenuFooter = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
    init()
  }

  const { data: session } = useSession()

  const { theme, toggleTheme } = useLayoutService()

  const handleClick = () => {
    ;(document.activeElement as HTMLElement).blur()
  }

  return (
    <>
      <div>
        <ul className="flex items-stretch">
          <li className="text-right">
            <Link className="btn btn-ghost rounded-btn" href="/cart">
              Carrito
              {mounted && items.length != 0 && (
                <div className="badge badge-secondary">
                  {items.reduce((a, c) => a + c.qty, 0)}{' '}
                </div>
              )}
            </Link>
          </li>
          {session && session.user ? (
            <>
              <li>
                <div className="dropdown dropdown-top dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    {session.user.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={-1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-1 shadow bg-base-300 rounded-box w-52"
                  >
                    {session.user.isAdmin && (
                      <li className="text-right" onClick={handleClick}>
                        <Link className="text-right" href="/admin/dashboard">
                          Admin Dashboard
                        </Link>
                      </li>
                    )}

                    <li onClick={handleClick}>
                      <Link href="/order-history">Pedidos </Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link href="/profile">Perfil</Link>
                    </li>
                    <li onClick={handleClick}>
                      <button type="button" onClick={signoutHandler}>
                        Salir
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <li>
              <button
                className="btn btn-ghost rounded-btn"
                type="button"
                onClick={() => signIn()}
              >
                Acceder
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default MenuFooter
