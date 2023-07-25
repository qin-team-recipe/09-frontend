import React from "react"
import { Heading, HeadingTitle, MoreLink } from "@/components/Heading"
import { ChefType } from "@/types/types"
import { ChefCard } from "./ChefCard"

type Props = {
  chefList: ChefType[]
}
export const ChefList = (props: Props) => {
  const { chefList } = props
  return (
    <>
      <Heading>
        <HeadingTitle>シェフ</HeadingTitle>
        <MoreLink href="#" />
      </Heading>
      <div className="mt-2.5 flex flex-col gap-5 pl-4 pr-3">
        {chefList.map((chef, i) => {
          return <ChefCard key={i} chef={chef} />
        })}
      </div>
    </>
  )
}
