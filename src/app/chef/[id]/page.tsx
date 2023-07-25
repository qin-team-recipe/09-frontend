import React from "react"
import { RecipeCard } from "@/components/RecipeCard"

const DUMMY_DATA = [
  { title: "グラタン", description: "マイレシピ", likes: 0 },
  {
    title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "ウルトラハイパー超すごいしまぶーシェフだよ",
    likes: 1234,
  },
  {
    title: "グラタン",
    description: "マイレシピ",
    likes: 12,
  },
  {
    title: "グラタン",
    description: "マイレシピ",
    likes: 123,
  },
  {
    title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "ウルトラハイパー超すごいしまぶーシェフ",
    likes: 1234,
  },
]

const ChefDetailPage = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 md:gap-6">
      {DUMMY_DATA.map((recipe, i) => (
        <RecipeCard
          key={i}
          title={recipe.title}
          description={recipe.description}
          likes={recipe.likes}
        />
      ))}
    </div>
  )
}

export default ChefDetailPage
