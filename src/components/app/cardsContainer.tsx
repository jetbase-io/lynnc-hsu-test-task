"use client";

import * as React from "react"
import { Separator } from "@/components/ui/separator"

export function CardsContainer({ children, title }: {
    children: React.ReactNode,
    title: string
}) {
    return (
        <div className="max-[1600px]:max-w-5xl max-[1600px]:mx-auto">
            <h4 className="font-semibold">{title}</h4>
            <Separator className="my-4 h-[2px]" />

            <div className='flex justify-between max-[1600px]:flex-wrap max-[1600px]:gap-6 max-[1600px]:justify-center  mt-3 mb-6'>
                {children}
            </div>
        </div >
    )
}