import type { Meta, StoryObj } from "@storybook/react"

import { TomatoButton } from "./TomatoButton"

const meta: Meta<typeof TomatoButton> = {
  title: "Button/TomatoButton",
  component: TomatoButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TomatoButton>

export const Primary: Story = {
  args: {
    text: "Button",
  },
}
