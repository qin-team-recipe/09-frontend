import Image from "next/image"
import { FC } from "react"
import { HeartIcon } from "@/components/HeartIcon"

type RecipeImageProps = {
  likes: number
}

export const RecipeImage: FC<RecipeImageProps> = (props) => {
  const { likes } = props

  return (
    <div className="relative">
      <Image
        className="h-full w-full"
        src="/sampleRecipe.png"
        alt="sample recipe"
        width={173}
        height={173}
      />
      <div className="absolute right-2 top-2 flex h-7 w-16 cursor-pointer items-center justify-center space-x-1 rounded-full bg-[#040013]/50 p-1.5 px-1">
        <HeartIcon />
        <p className="text-sm text-white">{likes}</p>
      </div>
    </div>
  )
}
