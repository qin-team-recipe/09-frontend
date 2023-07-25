import type { Meta, StoryObj } from "@storybook/react"

import { SnsCard } from "./SnsCard"

const meta: Meta<typeof SnsCard> = {
  title: "SnsCard",
  component: SnsCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SnsCard>

export const Twitter: Story = {
  args: {
    title: "Twitter",
    account: "@shimabu_it",
    follower: 1234,
    path: "https://twitter.com/",
  },
}

export const Instagram: Story = {
  args: {
    title: "Instagram",
    account: "@shimabu_it",
    follower: 1234,
    path: "https://www.instagram.com/",
  },
}

export const OtherSite: Story = {
  args: {
    title: "サイト名",
    account: "@shimabu_it",
    follower: 1234,
    link: "https://it-kingdom.com/",
    path: "https://it-kingdom.com/",
  },
}
