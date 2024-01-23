'use client'

import useCartService from '@/lib/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CartDetails() {
  const router = useRouter()
  const { items, itemsPrice, decrease, increase } = useCartService()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <>
      <div className="h-svh">
        <br />
        <h1 className="h-full py-4 text-2xl">Mi pedido</h1>

        {items.length === 0 ? (
          <div className="h-full">
            Tu pedido esta vacio. <Link href="/">Ver productos</Link>
          </div>
        ) : (
          <div className="grid h-full md:grid-cols-4 md:gap-5">
            <div className="overflow-x-auto md:col-span-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>Productos</th>
                    <th>Cantidad en cajas</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.slug}>
                      <td>
                        <Link
                          href={`/product/${item.slug}`}
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          <span className="px-2">{item.name}</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn pl-2.5 pr-2.5n"
                          type="button"
                          style={{ maxHeight: '30px', maxWidth: '30px' }}
                          onClick={() => decrease(item)}
                        >
                          -
                        </button>
                        <span className="px-2">{item.qty}</span>
                        <button
                          className="btn pl-2.5 pr-2.5"
                          type="button"
                          style={{ maxHeight: '30px', maxWidth: '30px' }}
                          onClick={() => increase(item)}
                        >
                          +
                        </button>
                      </td>
                      <td>€{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="card bg-base-300">
                <div className="card-body">
                  <ul>
                    <li>
                      <div className="pb-3 text-xl">
                        Valor del pedido ({items.reduce((a, c) => a + c.qty, 0)}
                        ) : €{itemsPrice}
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push('/shipping')}
                        className="btn btn-primary w-full"
                      >
                        Procesar Pedido
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </div>
    </>
  )
}
