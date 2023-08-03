"use client";
import Icon from '@mdi/react';
import { mdiShopping } from '@mdi/js';
import { mdiApps } from '@mdi/js';
import { useSidebarStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import * as React from "react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
const menu = [
    {
        id: 'products',
        title: 'Products',
        icon: mdiShopping,
        link: '',
        children: [
            {
                id: 'search_products',
                title: "Search Products",
                link: ''
            },
        ]
    },
    {
        id: 'application',
        title: 'Application',
        icon: mdiApps,
        link: '',
        children: [
            {
                id: 'partners',
                title: "Partners",
                link: ''
            },
        ]
    }
]

export function Sidebar() {
    const { isMaximized, toggle } = useSidebarStore()
    const handleMenuElClick = () => {
        if (!isMaximized) {
            toggle()
        }
    }
    return (
        <div className="relative ">
            <div className={cn('min-h-screen sticky top-0  transition-all duration-750 ease-in text-white  bg-slate-700 ', ((isMaximized) ? 'w-[260px]' : 'w-[50px]'))}>
                <div className={cn("h-[60px] bg-slate-800 transition-all duration-500 ease-linear w-full flex justify-center items-center", (isMaximized ? "-translate-y-0" : 'hidden -translate-y-full'))}>
                    <span className="block text-xl">Company Logo</span>
                </div>
                {menu.map((el, index) => (
                    <Collapsible key={el.id}>
                        <CollapsibleTrigger onClick={handleMenuElClick} className="flex items-center w-full p-4 text-left gap-x-2 hover:bg-slate-800"><Icon path={el.icon} className='w-4 h-4' /> <span className={(isMaximized ? "" : 'hidden')}> {el.title}</span>
                        </CollapsibleTrigger>
                        {(el.children) && (el.children.map((subEl, subIndex) => (
                            <CollapsibleContent className={(isMaximized ? "" : 'hidden')} key={subEl.id}>
                                <div className="w-full py-3 pl-12 pr-4 text-base text-left hover:bg-slate-800">{subEl.title}</div>
                            </CollapsibleContent>
                        )))}
                    </Collapsible>
                ))}


            </div>
        </div>
    )
}