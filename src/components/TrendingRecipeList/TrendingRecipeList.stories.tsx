import type { Meta, StoryObj } from "@storybook/react"

import { TrendingRecipeList } from "./TrendingRecipeList"

const meta: Meta<typeof TrendingRecipeList> = {
  title: "Recipe/TrendingRecipeList",
  component: TrendingRecipeList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TrendingRecipeList>

export const Primary: Story = {
  args: {
    trendingRecipeList: [
      {
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
        description: "ウルトラハイパー超すごいしまぶーシェフ",
        favoriteCount: 3000,
        image: "/img/sampleRecipe.png",
        path: "/recipe/1"
      },
      {
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
        description: "ウルトラハイパー超すごいしまぶーシェフ",
        favoriteCount: 100,
        image: "/img/sampleRecipe.png",
        path: "/recipe/1"
      },
      {
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
        description: "ウルトラハイパー超すごいしまぶーシェフ",
        favoriteCount: 200,
        image: "/img/sampleRecipe.png",
        path: "/recipe/1"
      },
      {
        title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
        description: "ウルトラハイパー超すごいしまぶーシェフ",
        favoriteCount: 4,
        image: "/img/sampleRecipe.png",
        path: "/recipe/1"
      }
    ]
  },
}
