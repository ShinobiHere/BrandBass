import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import Link from "next/link";
export default function ErrorStripe(){
    return(
        <div className="mt-32 h-screen">
            <CircleX className="text-red-600 w-16 h-16 mx-auto my-6"/>
                <div className="text-center">
            <h2 className="font-semibold">Something Went Wrong!!!</h2>

            <Button className="mt-5">
                <Link href={"/"}>
                Go Back
                </Link>
            </Button>
                </div>
        </div>
    )
}