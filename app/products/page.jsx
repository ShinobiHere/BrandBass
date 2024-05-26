import { ArrowRight } from "lucide-react"
import { client, urlFor } from "../lib/sanity"
import Link from "next/link"
import Image from "next/image"

async function getData() {
    const query = `*[_type == 'product'] | order(_createdAt desc){
        _id,
          price,
          name,
          'slug':slug.current,
          'categoryName':category->name,
          'imageUrl':image[0].asset->url
      }`
    const data = await client.fetch(query)
    return data
}

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
    const data = await getData()

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold">All Products</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="group relative ">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Link href={`/product/${product.slug}`}>
                                <Image src={product.imageUrl} alt={product.slug} width={300} height={300} priority
                                    className="w-full h-full object-cover cursor-pointer object-center lg:w-full lg:h-full" />
                                </Link>
                            </div>
                        
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3  className="text-sm font-medium text-gray-700">
                                    <Link href={`/product/${product.slug}`}>
                                        {product.name}
                                    </Link>
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-gray-500"><Link href={`/${product.categoryName}`}>{product.categoryName}</Link></p>
                                </div>
                                <p className="text-lg font-bold text-gray-800">${product.price}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
