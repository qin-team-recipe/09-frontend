import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import {  ChefType } from "@/types/types"

type Props = {
  chef: ChefType
}

export const ChefAvatar: FC<Props> = ({chef}) => {

  return (
    <Link
      href={{ pathname: chef.path }}
      className={`flex flex-col items-center md:hover:opacity-90`}>
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={chef.image}
            alt="chef"
            width={80}
            height={80}
          />
        </div>
        <p className="mt-2 text-center text-sm ">{chef.name}</p>
    </Link>
  )
}
