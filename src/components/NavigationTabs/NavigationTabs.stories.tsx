import type { Meta, StoryObj } from "@storybook/react"

import { NavigationTabs } from "./NavigationTabs"

const meta: Meta<typeof NavigationTabs> = {
  title: "NavigationTabs",
  component: NavigationTabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof NavigationTabs>

export const Primary: Story = {
  args: {},
}
