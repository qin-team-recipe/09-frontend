import type { Meta, StoryObj } from "@storybook/react"

import { RecipeItem } from "./RecipeItem"

const meta: Meta<typeof RecipeItem> = {
  title: "Recipe/RecipeItem",
  component: RecipeItem,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipeItem>

export const Primary: Story = {
  args: {
    recipe: {
      title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
      description: "ウルトラハイパー超すごいしまぶーシェフ",
      favoriteCount: 3000,
      image: "/img/sampleRecipe.png",
      path: "/recipe/1",
    },
  },
}
