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
      <div className="flex flex-col px-4 pb-5 pt-4">
        <div className="flex flex-col gap-y-4">
          <div className="flex ">
            <h1 className="w-64 text-xl font-bold md:w-80">{recipeName}</h1>
            {/* TODO: 実際のsnsメニューに置き換える */}
            <div className="ml-auto h-6  w-24 bg-red-300 text-center">
              snsアイコン
            </div>
          </div>
          <p className="text-sm">{recipeDescription}</p>
        </div>
        <div className="mt-2 flex gap-x-4">
          <Link href={"/chef/1"} className="flex items-center gap-x-0.5">
            <div className="h-4 w-4 rounded-full bg-gray-300" />
            <p className="text-sm text-[#6F6E77]">{chefName}</p>
          </Link>
          <div className="flex gap-1">
            <p className="text-sm font-bold text-[#6F6E77]">
              {favoriteCount.toLocaleString()}
            </p>
            <p className="text-sm text-[#6F6E77]">お気に入り</p>
          </div>
        </div>
        {/* TODO:実際の評価ボタンに置き換える */}
        <button className="mt-4 w-full place-self-start bg-red-300 px-2">
          お気に入りに追加
        </button>
      </div>
      {children}
    </section>
  )
}

const recipeImage = "/img/RecipeImageRecipe.png"
const recipeName = "グラタングラタングラタングラタングラタン"
const recipeDescription =
  "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。 ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。"
const chefName = "しまぶーシェフ"
