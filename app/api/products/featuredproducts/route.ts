// api/products/featuredproducts/route.ts
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = async (req: any) => {
  await dbConnect()

  const featuredProducts = await ProductModel.find({ isFeatured: true })
  return Response.json(featuredProducts)
}
