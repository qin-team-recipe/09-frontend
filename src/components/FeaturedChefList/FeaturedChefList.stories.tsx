import type { Meta, StoryObj } from "@storybook/react"

import { FeaturedChefList } from "./FeaturedChefList"

const meta: Meta<typeof FeaturedChefList> = {
  title: "Chef/FeaturedChefList",
  component: FeaturedChefList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FeaturedChefList>

export const Primary: Story = {
  args: {
    featuredChefList: [
      {
        name: "しまぶーシェフ",
        image: "/img/sampleChefTop.png",
        path: "#",
      },
      {
        name: "名前が2行のシェフです",
        image: "/img/sampleChefTop.png",
        path: "#",
      },
      {
        name: "名前が3行のシェフはこうなります",
        image: "/img/sampleChefTop.png",
        path: "#",
      }
    ]
  },
}
