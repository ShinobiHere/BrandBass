"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

export default function CheckoutNow({ currency, description, price,price_id, image, name }) {
    const { checkoutSingleItem } = useShoppingCart()
    function buyNow(priceId) {
        checkoutSingleItem(priceId)
    }
    const product = {
        currency: currency,
        name: name,
        price: price,
        description: description,
        // image:urlFor(image).url(),
        price_id: price_id,
    }
    return (

        <Button 
        variant={"secondary"} 
        className="text-gray-700 bg-gray-300 hover:bg-gray-200 hover:text-gray-400" onClick={()=>{buyNow(product.price_id)}}>Checkout Now</Button>
    )
}