import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '@/components/products/Rating'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <br />
          <Image
            className="rounded-md"
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            {/*
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ratings`}
              />
            </li>

            */}
            <li>
              Variedad: <p>{product.brand}</p>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Origen: <p>{product.description}</p>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Descripción: <p>Contenido en caja 20Kg</p>
            </li>
          </ul>
        </div>

        <br />
        <div className="btn btn-outline btn-warning rounded-full">
          <Link href="/">Regresar a productos</Link>
        </div>
        <br />

        <div>
          <div className="card rounded-md bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="p-2 rounded-md">
              <div className="mb-2 flex justify-between">
                <div>Precio por caja</div>
                <div>€{product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Disponibilidad</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
