import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import UiField from './UiField.vue'
import UiInput from '../UiInput/UiInput.vue'

const meta: Meta<typeof UiField> = {
  title: 'Components/UiField',
  component: UiField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof UiField>

export const WithLabel: Story = {
  args: {
    label: 'E-mail',
    modelValue: '',
  },
  render: (args) => {
    return h(UiField, { label: args.label }, {
      default: () => h(UiInput, {
        modelValue: args.modelValue,
        'onUpdate:modelValue': (value: string) => { args.modelValue = value },
        placeholder: 'Введите email'
      })
    })
  }
}
