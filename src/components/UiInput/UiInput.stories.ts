import type { Meta, StoryObj } from '@storybook/vue3'
import UiInput from './UiInput.vue'

const meta: Meta<typeof UiInput> = {
  title: 'Components/UiInput',
  component: UiInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof UiInput>

export const Default: Story = {
  args: {
    placeholder: 'Введите текст'
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Отключенное поле',
    isDisabled: true
  }
}

export const WithValue: Story = {
  args: {
    modelValue: 'Текст в поле',
    placeholder: 'Введите текст'
  }
}
