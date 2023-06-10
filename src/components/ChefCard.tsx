import Image from "next/image"
import type { FC } from "react"
import { TablerToolsKitchen2Icon } from "@/components/TablerToolsKitchen2Icon"

type Props = {
  name: string
  description: string
  image: string
  recipeCount: number
}

export const ChefCard: FC<Props> = (props) => {
  const { name, description, image, recipeCount } = props

  return (
    <div className="flex max-h-28 max-w-md">
      <Image
        className=" rounded-2xl"
        src={image}
        width={88}
        height={116}
        alt="chef"
      />
      <div className="ml-2 w-64 md:w-96">
        <p className="line-clamp-1 text-lg font-bold ">{name}</p>
        <p className="line-clamp-3 h-14	text-sm font-normal">
          {description}
        </p>
        <div className="mt-1 flex items-center pb-1">
          <TablerToolsKitchen2Icon />
          <div className="ml-2 flex ">
            <p className="text-sm	">{recipeCount}</p>
            <p className="ml-0.5	text-sm">レシピ</p>
          </div>
        </div>
      </div>
    </div>
  )
}
