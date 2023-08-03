"use client";
import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectCategory({ className }: { className: string }) {
    return (
        <Select >
            <SelectTrigger className={cn("w-[180px]", className)} >
                <SelectValue placeholder="All Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="all-category">All Category</SelectItem>
                    <Separator className="my-4" />
                    <SelectItem value="women-clothing">Women&apos;s Clothing</SelectItem>
                    <SelectItem value="men-clothing">Men&apos;s Clothing</SelectItem>
                    <SelectItem value="pet-supplies">Pet Supplies</SelectItem>
                    <SelectItem value="toys-hobbies">Toys Hobbies</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
