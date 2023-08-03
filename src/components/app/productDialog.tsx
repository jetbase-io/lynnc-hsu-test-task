"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { SelectCountry } from '@/components/app/selectCountry'
import { ShippingToTable } from "@/components/app/productShippingTable";
import React from "react";

export function ProductDialog({ children }: {
    children: React.ReactNode
}) {
    const [open, setOpen] = React.useState(false);
    const handleSaveBtn = () => {
        setOpen(false)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild >
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1000px]">
                <DialogHeader>

                </DialogHeader>
                <div className="flex flex-col">
                    <div>
                        <h4 className="font-bold text-gray-600">Ship to</h4>
                        <SelectCountry className="mt-3" />
                    </div>
                    <div className="mt-6">
                        <h4 className="font-bold text-gray-600">Shipping Method </h4>
                        <ShippingToTable className="mt-6" />
                    </div>
                </div>
                <DialogFooter className="flex !justify-center w-full">
                    <Button onClick={handleSaveBtn}  >Save </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
