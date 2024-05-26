"use client"
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
    return (
        <USCProvider 
        mode="payment" 
        cartMode="client-only" 
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
        successUrl="http://localhost:3000/stripe/success" 
        cancelUrl="http://localhost:3000/stripe/error" 
        currency="pkr" 
        billingAddressCollection={false} 
        shouldPersist={true}
        language="en-US">{children}</USCProvider>
    )
}