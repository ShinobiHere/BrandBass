"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

export default function AddToBag({ currency, description, price,price_id, image, name }) {
    const { addItem, handleCartClick } = useShoppingCart()
    const product = {
        currency: currency,
        name: name,
        price: price,
        description: description,
        image:urlFor(image).url(),
        price_id: price_id,
    }
    return (

        <Button onClick={()=>{ addItem(product), handleCartClick()}}>Add to Cart</Button>
    )
}