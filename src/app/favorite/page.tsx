import Link from "next/link"
import { ChefAvatar } from "@/components/ChefAvatar"
import { HeadingTitle } from "@/components/HeadingTitle"
import { RecipeItem } from "@/components/RecipeItem"
import { TrendingRecipeType , ChefType } from "@/types/types"

export default function Home() {
  return (
    <>
      <div className="grid gap-y-2">
        <HeadingTitle>シェフ</HeadingTitle>
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
          {chefList.map((chef, i) => (
            <div key={i}> 
              <ChefAvatar
              chef={chef}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <HeadingTitle>新着レシピ</HeadingTitle>
          <Link
            href={{ pathname: "./" }}
            className="text-base font-bold text-[#908E96] md:hover:opacity-90"
          >
            もっと見る
          </Link>
        </div>
        <div className="hidden-scrollbar mt-2.5 flex snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto scroll-smooth">
          {trendingRecipeList.map((recipe, i) => {
            return <RecipeItem key={i} recipe={recipe} />
          })}
        </div>
      </div>
      <div className="grid gap-y-2">
        <HeadingTitle>お気に入りレシピ</HeadingTitle>
        <div className="grid grid-cols-2 gap-4">
          {trendingRecipeList.map((recipe, i) => {
            return <RecipeItem key={i} recipe={recipe} width="[100%]" />
          })}
        </div>
      </div>
    </>
  )
}


const chefList: ChefType[] = Array.from({ length: 11 }, (_, i) => ({
  name: "ひふみシェフ",
  description: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
  image: "/img/sampleChefCard.png",
  path: "#",
  recipeCount: i + 1,
}));

const trendingRecipeList: TrendingRecipeType[] = Array.from({ length: 11 }, (_, i) => ({
  title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "ウルトラハイパー超すごいしまぶーシェフ",
    favoriteCount: i + 1,
    image: "/img/sampleRecipe.png",
    path: "#",
}));
