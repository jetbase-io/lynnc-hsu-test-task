
import { Product } from "@/lib/types"
import * as React from "react"
import { CardsContainer } from "@/components/app/cardsContainer"
import { ProductCard } from '@/components/app/productCard'

export function SectionRecommended({ products }: { products: Product[] }) {
    return (
        <CardsContainer title='Recommended for you'>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </CardsContainer >
    )
}