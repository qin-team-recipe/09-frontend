import React from "react"
import { TrendingRecipeType } from "@/app/page"
import { Heading } from "@/components/Heading"
import { HeadingTitle } from "@/components/HeadingTitle"
import { MoreLink } from "@/components/MoreLink"
import { RecipeItem } from "@/components/RecipeItem"

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
