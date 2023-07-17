import Image from "next/image"
import Link from "next/link"
import { HeartIcon } from "@/components/icons"
import { TrendingRecipeType } from "@/types/types"

type Props = {
  recipe: TrendingRecipeType
}

export const RecipeItem = (props: Props) => {
  const { recipe } = props
  const favoriteCount: string = recipe.favoriteCount.toLocaleString()
  return (
    <Link
      href={{ pathname: recipe.path }}
      className="relative inline-block w-[160px] shrink-0 snap-start md:hover:opacity-90"
    >
      <Image src={recipe.image} width={400} height={400} alt={recipe.title} />
      {recipe.favoriteCount ? (
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-2xl bg-[#0400137B]/[.48] px-2 py-1 text-sm font-normal text-white">
          <HeartIcon />
          {favoriteCount}
        </div>
      ) : null}
      <div className="mt-1.5 line-clamp-2 min-h-[32px] text-xs font-bold text-[#1A1523]">
        {recipe.title}
      </div>
      <div className="mt-1 line-clamp-1 text-[10px] text-[#6F6E77]">
        {recipe.description}
      </div>
    </Link>
  )
}
