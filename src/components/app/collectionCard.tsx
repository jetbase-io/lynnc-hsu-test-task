
"use client";
import * as React from "react"
import Image from 'next/image'
import { Product, Collection } from "@/lib/types";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export function CollectionCard({ collection }: { collection: Collection }) {
    return (
        <Card className="w-[300px]  overflow-hidden hover:shadow-xl cursor-pointer">
            <div className="h-[280px]">
                <Image
                    src={`/${collection.img}`}
                    width={300}
                    height={280}
                    alt="Picture of the author"
                    className="bg-cover h-full overflow-clip"
                />
            </div>
            <CardHeader className="p-4 space-y-1">
                <CardTitle className="text-base font-light leading-tight line-clamp-2">{collection.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 mt-4">
                <CardDescription className="text-xs">{collection.description}</CardDescription>
            </CardContent>

        </Card>
    )
}
