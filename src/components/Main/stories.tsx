import { Meta, StoryObj } from '@storybook/react'

import Main, { type MainProps } from '.'

export default {
  title: 'components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<MainProps> = {}

export const Basic: StoryObj<MainProps> = {
  args: {
    title: 'title basic',
    description: 'description'
  }
}
