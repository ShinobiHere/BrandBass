import { CheckCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function stripeSuccess() {
    return (
        <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
                <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
                <div className="text-center">

                    <h3 className="text-semibold text-center text-gray-800 md:text-2xl text-base">
                        Payment Done
                    </h3>

                    <p className="text-gray-500 my-2">
                        Thank you for your purchase We hope you enjoy it
                    </p>
                    <p>Have a great day!</p>
                    <Button asChild className="mt-5">
                        <Link href={"/"}>
                            Go Back
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}