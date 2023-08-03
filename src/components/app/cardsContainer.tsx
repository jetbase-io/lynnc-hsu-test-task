"use client";

import * as React from "react"
import { Separator } from "@/components/ui/separator"

export function CardsContainer({ children, title }: {
    children: React.ReactNode,
    title: string
}) {
    return (
        <div className="">
            <h4 className="font-semibold">{title}</h4>
            <Separator className="my-4 h-[2px]" />

            <div className='flex justify-between mt-3 mb-6'>
                {children}
            </div>
        </div >
    )
}