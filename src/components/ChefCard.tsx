import Image from "next/image"
import Link from "next/link"
import { TablerToolsKitchen2Icon } from "@/components/icon/TablerToolsKitchen2Icon"
import { ChefType } from "@/types/types"

type Props = {
  chef: ChefType
}

export const ChefCard = (props: Props) => {
  const { chef } = props
  const formattedRecipeCount: string = chef.recipeCount.toLocaleString()
  return (
    <Link href={{ pathname: chef.path }} className="flex max-h-28 max-w-md">
      <Image
        className="shrink-0 rounded-2xl"
        src={chef.image}
        width={88}
        height={116}
        alt={chef.name}
      />
      <div className="ml-2 md:w-96">
        <p className="line-clamp-1 text-lg font-bold">{chef.name}</p>
        <p className="line-clamp-3 h-14	text-sm font-normal text-[#86848D]">
          {chef.description}
        </p>
        <div className="mt-1 flex items-center pb-1">
          <TablerToolsKitchen2Icon />
          <div className="ml-2 flex">
            <p className="text-sm">{formattedRecipeCount}</p>
            <p className="ml-0.5 text-sm">レシピ</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
