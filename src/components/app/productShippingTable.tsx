"use client"
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export function ShippingToTable({ className }: { className: string }) {

    return (
        <div className={cn(className)}>
            <RadioGroup >
                <table className="">
                    <thead className="!pb-4 ">
                        <tr className="text-left text-gray-400 pb-">
                            <th ></th>
                            <th className="pb-4">Shipping Company</th>
                            <th>Delivery (Business Day)</th>
                            <th>Shipping Fee</th>
                            <th>Discounted Shipping Fee</th>
                            <th>Tracking</th>
                        </tr>
                    </thead>

                    <tbody className="mt-10">
                        {Array.from(Array(5).keys()).map((n, index) => (
                            <tr key={index} className="h-10 px-4 py-10 row hover:bg-gray-200">
                                <td className="p-2 col ">
                                    <RadioGroupItem value={`option-${index}`} id={`option-${index}`} />
                                </td>
                                <td>HyperSKU Economy Shipping</td>
                                <td>10-15</td>
                                <td className="text-orange-600">$20.01</td>
                                <td></td>
                                <td>Yes</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </RadioGroup>

        </div>
    )
}