import { FC } from "react"
import { RecipeImage } from "@/components/RecipeImage"

type RecipeCardProps = {
  title: string
  description: string
  likes: number
}

const RecipeCard: FC<RecipeCardProps> = (props) => {
  const { title, description, likes } = props

  return (
    <div>
      <RecipeImage likes={likes} />
      <div className="mt-2">
        <p className="mb-1 line-clamp-2 h-8 overflow-hidden text-ellipsis text-xs font-bold">
          {title}
        </p>
        <p className="line-clamp-1 text-xs text-custom-gray">{description}</p>
      </div>
    </div>
  )
}

export default RecipeCard
