import Link from "next/link"
import { AllAddToCartButton } from "@/app/recipe/[id]/_components/AllAddToCartButton"
import { IngredientListItem } from "@/app/recipe/[id]/_components/IngredientListItem"
import { Tabs } from "@/app/recipe/[id]/_components/Tabs"

export default function Ingredients({ params }: { params: { id: number } }) {
  return (
    <div className="flex flex-col">
      <Tabs activePath={`/recipe/${params.id}/ingredients`}>
        <Link
          className="py-2.5 text-center text-sm"
          href={`/recipe/${params.id}`}
        >
          作り方
        </Link>
        <Link
          className="py-2.5 text-center text-sm"
          href={`/recipe/${params.id}/ingredients`}
        >
          材料
        </Link>
      </Tabs>
      <div className="flex border-b pb-2 pt-5">
        <h2 className="ml-4 text-xl font-bold">{servingNumber}人前</h2>
        <AllAddToCartButton />
      </div>
      <div>
        {ingredients.map((ingredient) => (
          <IngredientListItem key={ingredient.id} name={ingredient.name} />
        ))}
      </div>
    </div>
  )
}

const servingNumber = 2

const ingredients = [
  {
    id: 1,
    name: "キャベツ",
  },
  {
    id: 2,
    name: "トマト",
  },
  {
    id: 3,
    name: "ブロッコリースプラウト",
  },
  {
    id: 4,
    name: "キャベツ",
  },
]
