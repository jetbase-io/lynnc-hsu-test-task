
import { Collection } from "@/lib/types";

import * as React from "react"
import { CardsContainer } from "@/components/app/cardsContainer"
import { CollectionCard } from '@/components/app/collectionCard'

export function SectionCollections({ collections }: {
    collections: Collection[]
}) {

    return (
        <CardsContainer title='Collections'>
            {collections.map((collection: Collection) => (
                <CollectionCard key={collection.id} collection={collection} />

            ))}

        </CardsContainer>
    )
}