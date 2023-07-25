import type { Meta, StoryObj } from "@storybook/react"

import { RecipeCard } from "./RecipeCard"

const meta: Meta<typeof RecipeCard> = {
  title: "RecipeCard/RecipeCard",
  component: RecipeCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecipeCard>

export const Primary: Story = {
  args: {
    title: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "ウルトラハイパー超すごいしまぶーシェフ",
    likes: 1000
  },
}
