import { client, } from "../lib/sanity"
import Image from "next/image"
import Link from "next/link"

async function getData(category){
    const query = `*[_type == "product" && category->name == "${category}"]{
        _id,
          "imageUrl":image[0].asset->url,
          name,
          price,
          "slug": slug.current,
          "categoryName": category->name,
      }`
      const data = await client.fetch(query)
      console.log(data)
      return data
    }

    
export const dynamic = "force-dynamic";
export default async function CartPage({params}){
    const data = await getData(params.category)
    return( 
        <div className=" bg-white">
        <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-22 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl mb-2">Our Products for {params.category}</h2>

            </div>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
                                <p className="mt-1 text-sm font-medium text-gray-500">{product.categoryName}</p>
                            </div>
                            <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                        </div>

                    </div>
                ))
            }

            </div>
        </div>
    </div>
       )

}