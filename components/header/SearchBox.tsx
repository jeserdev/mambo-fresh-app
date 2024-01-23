'use client'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'

export const SearchBox = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''
  const category = searchParams.get('category') || 'All'

  const { data: categories, error } = useSWR('/api/products/categories')

  if (error) return error.message
  if (!categories) return 'Loading...'

  return (
    <form action="/search" method="GET">
      <div className="flex flex-wrap w-full overflow-x-hidden gap-2">
          <input
          className="flex-1 input input-bordered w-48 min-w-[100px]"
          placeholder="producto.."
          defaultValue={q}
          name="q"
        />
        <button className="btn">Buscar</button>
      </div>
    </form>
  )
}
