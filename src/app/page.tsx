import { ChefList } from "@/components/ChefList"
import { FeaturedChefList } from "@/components/FeaturedChefList"
import { SearchBox } from "@/components/SearchBox"
import { TrendingRecipeList } from "@/components/TrendingRecipeList"

export type FeaturedChefType = {
  name: string
  image: string
  path: string
}

export type TrendingRecipeType = {
  title: string
  description: string
  favoriteCount: number
  image: string
  path: string
}

export type ChefType = {
  name: string
  description: string
  image: string
  path: string
  recipeCount: number
}

export default function Home() {
  const featuredChefList: FeaturedChefType[] = [
    {
      name: "山田シェフ",
      image: "/img/sampleChefTop.png",
      path: "#",
    },
    {
      name: "田中シェフ",
      image: "/img/sampleChefTop.png",
      path: "#",
    },
    {
      name: "佐藤シェフ",
      image: "/img/sampleChefTop.png",
      path: "#",
    },
  ]
  const trendingRecipeList: TrendingRecipeType[] = [
    {
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      description: "ウルトラハイパー超すごいしまぶーシェフ",
      favoriteCount: 1,
      image: "/img/sampleRecipe.png",
      path: "#",
    },
    {
      title: "トマトとルッコラのマルゲリータピザ",
      description: "ウルトラハイパー超すごいしまぶーシェフ",
      favoriteCount: 1234,
      image: "/img/sampleRecipe.png",
      path: "#",
    },
    {
      title: "トマトとルッコラ",
      description: "すごいしまぶーシェフ",
      favoriteCount: 123,
      image: "/img/sampleRecipe.png",
      path: "#",
    },
    {
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      description: "ウルトラハイパー超すごいしまぶーシェフ",
      favoriteCount: 12345,
      image: "/img/sampleRecipe.png",
      path: "#",
    },
    {
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      description: "ウルトラハイパー超すごいしまぶーシェフ",
      favoriteCount: 0,
      image: "/img/sampleRecipe.png",
      path: "#",
    },
  ]
  const chefList: ChefType[] = [
    {
      name: "ひふみシェフ",
      description:
        "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      image: "/img/sampleChefCard.png",
      path: "#",
      recipeCount: 123,
    },
    {
      name: "ひふみシェフ",
      description:
        "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      image: "/img/sampleChefCard.png",
      path: "#",
      recipeCount: 1234,
    },
    {
      name: "ひふみシェフ",
      description:
        "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
      image: "/img/sampleChefCard.png",
      path: "#",
      recipeCount: 0,
    },
  ]
  return (
    <div className="max-w-[480px] border-x border-[#EEDEF] pt-[57px]">
      <SearchBox />
      <div className="py-5">
        <FeaturedChefList featuredChefList={featuredChefList} />
        <div className="mt-12">
          <TrendingRecipeList trendingRecipeList={trendingRecipeList} />
        </div>
        <div className="mt-12">
          <ChefList chefList={chefList} />
        </div>
      </div>
    </div>
  )
}
