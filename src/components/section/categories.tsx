

import { Category } from "@/lib/types";
import Image from 'next/image'
import * as React from "react"


export function SectionCategories({ categories }: { categories: Category[] }) {
    console.log(categories)
    return (
        <div className='flex flex-wrap border-collapse '>
            {categories.map((category: Category) => (
                <div key={category.id} className='flex items-center w-1/5 p-4 text-black border cursor-pointer gap-x-4 hover:bg-gray-200'>
                    <Image src={`/${category.img}`} width={24} height={24} alt={category.title} />
                    <span className=''>{category.title}</span>
                </div>
            ))}
        </div>
    )
}
