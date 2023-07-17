import type { Meta, StoryObj } from "@storybook/react"

import { SearchBox } from "./SearchBox"

const meta: Meta<typeof SearchBox> = {
  title: "SearchBox",
  component: SearchBox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SearchBox>

export const Primary: Story = {
  args: {},
}
