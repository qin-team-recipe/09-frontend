import Image from "next/image"
import Link from "next/link"
import { HeartIcon } from "@/components/icon/HeartIcon"

type Props = {
  title: string
  description: string
  favoriteCount: number
  href: string
  image: string
}

export const RecipeItem = (props: Props) => {
  const { title, description, favoriteCount, href, image } = props
  const formattedNumber: string = favoriteCount.toLocaleString()
  return (
    <Link
      href={{ pathname: href }}
      className="relative inline-block w-[174px] md:w-[218px] md:hover:opacity-90"
    >
      <Image src={image} width={400} height={400} alt="レシピ" />
      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-2xl bg-[#0400137B]/[.48] px-2 py-1 text-sm font-normal text-white">
        <HeartIcon />
        {formattedNumber}
      </div>
      <div className="mt-1.5 line-clamp-2 h-7 overflow-hidden text-xs font-bold text-[#1A1523]">
        {title}
      </div>
      <div className="mt-1 line-clamp-1 overflow-hidden text-[10px] text-[#6F6E77]">
        {description}
      </div>
    </Link>
  )
}
