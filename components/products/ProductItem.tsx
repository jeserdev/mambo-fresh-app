import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rating } from './Rating'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-2 relative">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover h-40 w-full"
          />
        </Link>
      </figure>
      <div className="absolute top-0 left-0 m-2">
        <div className="flex items-center justify-center bg-[#024936] text-[#F2E8D1] rounded-full h-12 w-12">
          <span className="text-center text-sm">€{product.price}</span>
        </div>
      </div>
      <div className="card-body-1 text-center">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-center font-normal">{product.name}</h2>
        </Link>
        {/** 
    <Rating value={product.rating} caption={`(${product.numReviews})`} />
    */}
        <p className="mb-2">{product.brand}</p>
      </div>
    </div>
  )
}
