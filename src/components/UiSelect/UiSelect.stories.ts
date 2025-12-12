import type { Meta, StoryObj } from '@storybook/vue3'
import UiSelect from './UiSelect.vue'

const meta: Meta<typeof UiSelect> = {
  title: 'Components/UiSelect',
  component: UiSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    options: { control: 'object' }
  }
}

export default meta

type Story = StoryObj<typeof UiSelect>

export const Default: Story = {
  args: {
    options: ['Опция 1', 'Опция 2', 'Опция 3']
  }
}

export const Disabled: Story = {
  args: {
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: true
  }
}

export const WithSelected: Story = {
  args: {
    modelValue: 'Опция 2',
    options: ['Опция 1', 'Опция 2', 'Опция 3']
  }
}
