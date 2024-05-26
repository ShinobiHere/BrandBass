"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { Button } from "@/components/ui/button"

export default function ShoppingCartModel() {
    const {redirectToCheckout,cartCount,cartDetails, removeItem,shouldDisplayCart,totalPrice, handleCartClick} = useShoppingCart()
    async function handleCheckoutClick(event){
        event.preventDefault()
        try{
            const result = await redirectToCheckout()
        if(result?.error){
            console.log(error)
        }
        }catch(error){
                console.log(error)
            
        }
    }
    return (
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
            <SheetContent className="sm:max-w-lg w-[90vw]">
                <SheetHeader>
                    <SheetTitle>
                        Shopping Cart
                    </SheetTitle>
                </SheetHeader>
                <div className="h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto ">
                <ul className="-my-6 divide-y divide-gray-200">
                    {cartCount === 0 ? (
                        <h1 className="py-6">You dont have anything to buy</h1>
                    ):(
                        <>
                        {Object.values(cartDetails ?? {}).map((entry)=>(
                        <li key={entry.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 rounded-md  overflow-hidden border border-gray-200">
                                <Image className="" src={entry.image} priority
                                width={100}
                                height={100}
                                />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col ">
                                <div>
                                    <div className="flex justify-between text-base text-gray-950 font-medium ">
                                        <h3 className="font-medium">
                                            {entry.name}
                                        </h3>
                                        <p className="ml-4 font-bold">
                                            ${entry.price}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2 tracking-wide">{entry.description}</p>
                                </div>
                                <div className="flex flex-1  text-sm justify-between items-end">
                                    <p className="text-gray-950">
                                        QTY: {entry.quantity}
                                    </p>
                                    <div className="flex">
                                        <button type='button' onClick={()=> removeItem(entry.id)} 
                                        className="font-medium text-primary hover:text-primary/80">
                                            Remove</button>
                                    </div>
                                </div>
                            </div>
                        
                        </li>
                       ) )}
                        </>
)}
                </ul>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex text-base justify-between font-semibold text-gray-950  ">
                            <p>Subtotal</p>
                            <p>${totalPrice}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and Taxes are calculated at checkout.</p>
                    </div>

                    <div className="">
                        <Button onClick={handleCheckoutClick} className="w-full mb-4">
                            Checkout
                        </Button>
                    </div>
                    <div className="-mt-2 mb-4 flex justify-center text-center text-sm text-gray-500">
                        <p>OR <button onClick={()=>handleCartClick()} className="text-primary font-medium">Continue Shopping</button></p>
                    </div>
                </div>

            </SheetContent>
        </Sheet>

    )
}