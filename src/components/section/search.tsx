import * as React from "react"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { SelectCategory } from '@/components/app/selectCategory'

export function SectionSearch() {
    return (
        <div className=''>
            {/* search */}
            <div className='flex w-full gap-x-8 max-[1600px]:max-w-5xl mx-auto'>
                <div className='flex flex-1 w-full border '>
                    <Input type="text" className='z-10 w-full px-3 py-2 text-base text-gray-600 placeholder-gray-300 rounded-md rounded-tr-none rounded-br-none ' placeholder='Enter Keywords, SPU, SKU' />
                    <SelectCategory className="text-gray-400 bg-gray-100 rounded-tl-none rounded-bl-none " />
                </div>
                <div className=''>
                    <Button className='w-[128px] bg-blue-800 hover:bg-blue-800/80'>Search</Button>
                </div>
            </div>
        </div>
    )
}
