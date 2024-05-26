"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

export default function ImageGallery({ images }) {
    const [bigImage, setBigImage] = useState(images[0])
    
    const handleSmallImageClick = (image)=>{
        setBigImage(image)
    }
    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image src={urlFor(image).url()} width={200} height={200} alt="photo"
                            onClick={()=>handleSmallImageClick(image)}
                            className="h-full w-full object-cover object-center cursor-pointer " />
                    </div>
                
                ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image src={urlFor(bigImage).url()}
                alt='photo' width={500} height={500}
                className="h-full w-full object-cover object-center"
                />
                <span className="absolute top-0 left-0 text-sm uppercase tracking-wider py-2  px-4 rounded-br-lg text-white rounded  bg-red-500">Sale</span>
                
            </div>
        </div>
    )
}