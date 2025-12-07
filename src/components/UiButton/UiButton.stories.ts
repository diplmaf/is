import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from './UiButton.vue'

const meta: Meta<typeof UiButton> = {
  title: 'Components/UiButton',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['submit', 'button'],
    },
  },
}

export default meta

type Story = StoryObj<typeof UiButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Кнопка',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Кнопка',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: 'Кнопка',
  },
}
