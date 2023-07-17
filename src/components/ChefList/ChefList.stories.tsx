import type { Meta, StoryObj } from "@storybook/react"

import { ChefList } from "./ChefList"

const meta: Meta<typeof ChefList> = {
  title: "Chef/ChefList",
  component: ChefList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ChefList>

export const Primary: Story = {
  args: {
    chefList: [
      {
        name: "ひふみシェフ",
        description: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
        image: "/img/sampleChefCard.png",
        path: "#",
        recipeCount: 1000
      },
      {
        name: "ひふみシェフ",
        description: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
        image: "/img/sampleChefCard.png",
        path: "#",
        recipeCount: 1000
      },
      {
        name: "ひふみシェフ",
        description: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
        image: "/img/sampleChefCard.png",
        path: "#",
        recipeCount: 1000
      },
      {
        name: "ひふみシェフ",
        description: "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
        image: "/img/sampleChefCard.png",
        path: "#",
        recipeCount: 1000
      }
    ]
  },
}
