import Image from "next/image"
import Link from "next/link"
import { ArrowLeftIcon } from "@/components/ArrowLeftIcon"

const favoriteCount = 1234

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-full max-w-[390px] border-x  border-[#DCDBDD] pb-10 md:max-w-[480px]">
      <div className="relative">
        <Image
          src={recipeImage}
          width={480}
          height={480}
          alt="recipe"
          className="h-[390px] w-[390px] bg-gray-300 shadow-inner md:h-[480px] md:w-[480px]"
        />
        <Link
          href={"/"}
          className="absolute left-5 top-5 rounded-full p-1	hover:bg-[#05001238] hover:backdrop-opacity-20"
        >
          <ArrowLeftIcon stroke="#FDFCFD" height={32} width={32} />
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 px-4 pb-5 pt-4">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl font-bold">{recipeName}</h1>
          <p>{recipeDescription}</p>
        </div>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-0.5">
            <div className="h-[19px] w-[19px] rounded-full bg-gray-300" />
            <p>しまぶーシェフ</p>
          </div>
          <p>{favoriteCount.toLocaleString()}お気に入り</p>
        </div>
        {/* TODO:実際の評価ボタンに置き換える */}
        <button className="place-self-start bg-red-300 px-2">評価する</button>
      </div>
      {children}
    </section>
  )
}

const recipeImage = "/img/RecipeImageRecipe.png"
const recipeName = "シェフのレシピ"
const recipeDescription =
  "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している"
