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

const countries = [
    {
        "id": "US",
        "name": "United States"
    },
    {
        "id": "CA",
        "name": "Canada"
    },
    {
        "id": "GB",
        "name": "United Kingdom"
    },
    {
        "id": "AU",
        "name": "Australia"
    },
    {
        "id": "JP",
        "name": "Japan"
    },
    {
        "id": "DE",
        "name": "Germany"
    },
    {
        "id": "BR",
        "name": "Brazil"
    },
    {
        "id": "IN",
        "name": "India"
    },
    {
        "id": "CN",
        "name": "China"
    },
    {
        "id": "ZA",
        "name": "South Africa"
    }
]

export function SelectCountry({ className }: { className: string }) {
    return (
        <Select >
            <SelectTrigger className={cn("w-[240px]", className)} >
                <SelectValue placeholder="United States" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {countries.map(({ id, name }) => (
                        <SelectItem key={id} value={id}>{name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
