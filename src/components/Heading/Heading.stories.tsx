import type { Meta, StoryObj } from "@storybook/react"

import { Heading } from "./Heading"
import { HeadingTitle } from "./HeadingTitle"
import { MoreLink } from "./MoreLink"

type HeadingProps = {
  title: string
  isMoreLink: boolean
}

const MyHeading = ({ title, isMoreLink }: HeadingProps) => (
  <Heading>
    <HeadingTitle>{title}</HeadingTitle>
    {isMoreLink && <MoreLink href="#" />}
  </Heading>
)

const meta: Meta<typeof MyHeading> = {
  title: "Heading",
  component: MyHeading,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MyHeading>

export const Primary: Story = {
  args: {
    title: "注目のレシピ",
    isMoreLink: true,
  },
}

export const WithoutMoreLink: Story = {
  args: {
    title: "注目のシェフ",
    isMoreLink: false,
  },
}