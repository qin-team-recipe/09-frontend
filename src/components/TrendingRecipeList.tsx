import React from "react"

import { Heading, HeadingTitle, MoreLink } from "@/components/Heading"
import { RecipeItem } from "@/components/RecipeItem"
import { TrendingRecipeType } from "@/types/types"

type Props = {
  trendingRecipeList: TrendingRecipeType[]
}
export const TrendingRecipeList = (props: Props) => {
  const { trendingRecipeList } = props
  return (
    <>
      <Heading>
        <HeadingTitle>話題のレシピ</HeadingTitle>
        <MoreLink href="#" />
      </Heading>
      <div className="hidden-scrollbar mt-2.5 flex snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto scroll-smooth px-4">
        {trendingRecipeList.map((recipe, i) => {
          return <RecipeItem key={i} recipe={recipe} />
        })}
      </div>
    </>
  )
}
