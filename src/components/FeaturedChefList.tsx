import React from "react"

import { FeaturedChef } from "@/components/FeaturedChef"
import { Heading } from "@/components/Heading"
import { HeadingTitle } from "@/components/HeadingTitle"
import { FeaturedChefType } from "@/types/types"

type Props = {
  featuredChefList: FeaturedChefType[]
}
export const FeaturedChefList = (props: Props) => {
  const { featuredChefList } = props
  return (
    <>
      <Heading>
        <HeadingTitle>注目のシェフ</HeadingTitle>
      </Heading>
      <div className="hidden-scrollbar mt-2.5 flex snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto scroll-smooth px-4">
        {featuredChefList.map((chef, i) => {
          return <FeaturedChef key={i} chef={chef} />
        })}
      </div>
    </>
  )
}
