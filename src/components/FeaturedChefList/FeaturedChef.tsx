import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FeaturedChefType } from "@/types/types"

type Props = {
  chef: FeaturedChefType
}
export const FeaturedChef = (props: Props) => {
  const { chef } = props
  return (
    <Link
      href={{ pathname: chef.path }}
      className="relative inline-block w-[148px] shrink-0 snap-start hover:opacity-90"
    >
      <Image
        className="rounded-2xl"
        src={chef.image}
        width={296}
        height={448}
        alt={chef.name}
      />
      <div className="absolute bottom-3 left-4 text-xl font-bold text-white">
        {chef.name}
      </div>
    </Link>
  )
}
