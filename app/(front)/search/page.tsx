import ProductItem from '@/components/products/ProductItem'
import { Rating } from '@/components/products/Rating'
import productServices from '@/lib/services/productService'
import Link from 'next/link'
import { SearchBox } from '@/components/header/SearchBox'

const sortOrders = ['newest', 'lowest', 'highest', 'rating']
const prices = [
  {
    name: '$1 to $5',
    value: '1-5',
  },
  {
    name: '$5 to $20',
    value: '5-20',
  },
  {
    name: '$20 to $100',
    value: '20-100',
  },
]

const ratings = [5, 4, 3, 2, 1]

export async function generateMetadata({
  searchParams: { q = 'all', category = 'all', price = 'all', rating = 'all' },
}: {
  searchParams: {
    q: string
    category: string
    price: string
    rating: string
    sort: string
    page: string
  }
}) {
  if (
    (q !== 'all' && q !== '') ||
    category !== 'all' ||
    rating !== 'all' ||
    price !== 'all'
  ) {
    return {
      title: `Search ${q !== 'all' ? q : ''}
          ${category !== 'all' ? ` : Category ${category}` : ''}
          ${price !== 'all' ? ` : Price ${price}` : ''}
          ${rating !== 'all' ? ` : Rating ${rating}` : ''}`,
    }
  } else {
    return {
      title: 'Search Products',
    }
  }
}

export default async function SearchPage({
  searchParams: {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
    sort = 'newest',
    page = '1',
  },
}: {
  searchParams: {
    q: string
    category: string
    price: string
    rating: string
    sort: string
    page: string
  }
}) {
  const getFilterUrl = ({
    c,
    s,
    p,
    r,
    pg,
  }: {
    c?: string
    s?: string
    p?: string
    r?: string
    pg?: string
  }) => {
    const params = { q, category, price, rating, sort, page }
    if (c) params.category = c
    if (p) params.price = p
    if (r) params.rating = r
    if (pg) params.page = pg
    if (s) params.sort = s
    return `/search?${new URLSearchParams(params).toString()}`
  }
  const categories = await productServices.getCategories()
  const { countProducts, products, pages } = await productServices.getByQuery({
    category,
    q,
    price,
    rating,
    page,
    sort,
  })

  return (
    <div className="grid md:grid-cols-5 md:gap-5">
      <div className="filters hidden">
        <div className="text-xl pt-3">Categorías</div>
        <div>
          <ul>
            <li>
              <Link
                className={`link link-hover ${
                  'all' === category && 'link-primary'
                }`}
                href={getFilterUrl({ c: 'all' })}
              >
                Todas
              </Link>
            </li>
            {categories.map((c: string) => (
              <li key={c}>
                <Link
                  className={`link link-hover ${
                    c === category && 'link-primary'
                  }`}
                  href={getFilterUrl({ c })}
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xl pt-3">Precio</div>
          <ul>
            <li>
              <Link
                className={`link link-hover ${
                  'all' === price && 'link-primary'
                }`}
                href={getFilterUrl({ p: 'all' })}
              >
                Todos
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  href={getFilterUrl({ p: p.value })}
                  className={`link link-hover ${
                    p.value === price && 'link-primary'
                  }`}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xl pt-3">Valoraciones</div>
          <ul>
            <li>
              <Link
                href={getFilterUrl({ r: 'all' })}
                className={`link link-hover ${
                  'all' === rating && 'link-primary'
                }`}
              >
                Todas
              </Link>
            </li>
            {ratings.map((r) => (
              <li key={r}>
                <Link
                  href={getFilterUrl({ r: `${r}` })}
                  className={`link link-hover ${
                    `${r}` === rating && 'link-primary'
                  }`}
                >
                  <Rating caption={' & up'} value={r}></Rating>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-span-4">
        <br />
        <br />
        <div className="flex flex-wrap w-full overflow-x-hidden gap-2">
          <SearchBox />
        </div>
        <div className="flex items-center justify-between  py-4">
          <div className="flex items-center">
            {products.length === 0 ? 'No' : countProducts} Resultados
            {q !== 'all' && q !== '' && ' : ' + q}
            {category !== 'all' && ' : ' + category}
            {price !== 'all' && ' : Price ' + price}
            {rating !== 'all' && ' : Rating ' + rating + ' & up'}
            &nbsp;
            {(q !== 'all' && q !== '') ||
            category !== 'all' ||
            rating !== 'all' ||
            price !== 'all' ? (
              <Link className="btn btn-sm btn-ghost" href="/search">
                restablecer filtros
              </Link>
            ) : null}
          </div>
          <div className="hidden">
            Sort by{' '}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`mx-2 link link-hover ${
                  sort == s ? 'link-primary' : ''
                } `}
                href={getFilterUrl({ s })}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3  ">
            {products.map((product: any) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
          <div className="join">
            {products.length > 0 &&
              Array.from(Array(pages).keys()).map((p) => (
                <Link
                  key={p}
                  className={`join-item btn ${
                    Number(page) === p + 1 ? 'btn-active' : ''
                  } `}
                  href={getFilterUrl({ pg: `${p + 1}` })}
                >
                  {p + 1}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}
