import type { Preview } from "@storybook/react"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      // 実際のデバイスから選択できるようにする
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12'
    },
  },
}

export default preview
