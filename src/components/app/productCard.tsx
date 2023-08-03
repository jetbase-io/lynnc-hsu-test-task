"use client";
import * as React from "react"
import Image from 'next/image'
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import { ProductDialog } from "@/components/app/productDialog"

export function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="w-[300px]  overflow-hidden hover:shadow-xl">
            <div className="h-[280px]">
                <Image
                    src={`/${product.img}`}
                    width={300}
                    height={280}
                    alt="Picture of the author"
                    className="w-full h-full bg-cover overflow-clip"
                />
            </div>
            <CardHeader className="p-4 space-y-1">
                <CardTitle className="text-base font-light leading-tight line-clamp-2">{product.title}</CardTitle>
                <div className="font-semibold text-orange-500 ">USD {product.price}</div>
            </CardHeader>
            <CardContent className="px-4">
                <ProductDialog >
                    <div className="text-xs cursor-pointer">
                        <h5 className="font-semibold line-clamp-1">USD {product.price} By {product.shipping.company} ({product.shipping.delivery} days)</h5>
                        <span className="block mt-1">Average {product.shipping.delivery} days in the past month
                        </span>
                    </div>
                </ProductDialog>

                <div className="flex mt-3 text-orange-600">
                    {Array.from(Array(5).keys()).map((n, index) => (
                        <Icon key={index} path={mdiStar} className="w-4 h-4" />
                    ))}

                </div>
            </CardContent>
            <CardFooter className="flex px-4">
                <Button className="w-full ">Add to import list</Button>
            </CardFooter>
        </Card>
    )
}
