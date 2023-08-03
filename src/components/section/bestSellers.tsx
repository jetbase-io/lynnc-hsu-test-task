

import * as React from "react"
import { Product } from "@/lib/types"

import { CardsContainer } from "@/components/app/cardsContainer"
import { ProductCard } from '@/components/app/productCard'


export function SectionBestSellers({ products }: { products: Product[] }) {
    return (
        <CardsContainer title='Best Sellers'>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </CardsContainer>
    )
}