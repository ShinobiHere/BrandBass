import AddToBag from "@/app/components/AddToBag"
import ImageGallery from "@/app/components/ImageGallery"
import { client, urlFor } from "@/app/lib/sanity"
import { Button } from "@/components/ui/button"
import { Star, Truck } from "lucide-react"
import CheckoutNow from "@/app/components/CheckoutNow"
async function getData(slug){
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,  
          name,
          image,
          description,
          price,
          "slug": slug.current,
          "categoryName": category->name,
          price_id,
      }
      `
     const data = await client.fetch(query)
     return data;
}



export default async function ProductPge({params,}){
    const data = await getData(params.slug)
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                <ImageGallery images={data.image}/>
                
                <div className="md:py-8">
                    <div className="mb-2 md:mb-3">
                        <span className="mb-0.5 inline-block font-medium text-gray-500">
                            {data.categoryName}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                    </div>
                    <div className="mb-6 flex items-center gap-3 md:mb-10">
                        <Button className="active:bg-gray-300 active:text-gray-950 rounded-full gap-x-2">
                            <span className="text-sm">4.6</span>
                            <Star className="h-5 w-5"/>
                        </Button>
                        <span className="text-md text-gray-500 transition duration-100">56 ratings</span>
                    </div>
                    <div className="mb-4">
                        <div className="flex gap-2 items-end">
                        <span className="text-2xl text-gray-800 font-bold md:text3xl ">${data.price}</span>
                        <span className="text-md text-red-500 font-bold md:text-lg line-through">${data.price + 30}</span>
                    </div>
                    <span className="text-sm mt-1 text-gray-500">
                        Inc. Vat plus Shipping
                    </span>

                    </div>
                    <div className="mb-6 text-sm flex items-center gap-2.5 text-gray-500">
                        <Truck />
                        <span className="font-semibold ">2-4 Day Shipping</span>
                    </div>
                    <div className="mt-6 flex gap-2.5">
                        <AddToBag 
                        currency='USD'
                        description={data.description} 
                        name={data.name} 
                        price={data.price} 
                        image={data.image[0]} 
                        key={data._id}
                        price_id= {data.price_id} />
                        <CheckoutNow
                        currency='USD'
                        description={data.description} 
                        name={data.name} 
                        price={data.price} 
                        // image={data.image[0]} 
                        key={data._id}
                        price_id= {data.price_id} />                        
                        {/* <Button variant={"secondary"} className="text-gray-700 bg-gray-300 hover:bg-gray-200 hover:text-gray-400">Checkout Now</Button> */}
                    </div>

                    <p className="mt-16 text-gray-500 text-base tracking-wide">{data.description}</p>                
                </div>
                </div>

            </div>
        </div>
    )
}