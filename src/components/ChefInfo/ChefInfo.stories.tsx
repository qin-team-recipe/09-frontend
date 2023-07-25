import type { Meta, StoryObj } from "@storybook/react"

import { ChefInfo } from "./ChefInfo"

const meta: Meta<typeof ChefInfo> = {
  title: "Chef/ChefInfo",
  component: ChefInfo,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ChefInfo>

export const Primary: Story = {
  args: {
    name: "山田シェフ",
    description: "初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！ 絶賛発売中！",
    follower: 200,
    recipe: 1234
  },
}
