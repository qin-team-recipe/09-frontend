import type { Meta, StoryObj } from "@storybook/react"

import { OutlinedTomatoButton } from "./OutlinedTomatoButton"

const meta: Meta<typeof OutlinedTomatoButton> = {
  title: "Button/OutlinedTomatoButton",
  component: OutlinedTomatoButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof OutlinedTomatoButton>

export const Primary: Story = {
  args: {
    text: "Button",
  },
}
