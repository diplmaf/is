import type { Meta, StoryObj } from '@storybook/vue3'
import UiField from './UiField.vue'
import UiInput from './UiInput.vue'

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
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      return { args }
    },
    template: 
      <UiField v-bind="args">
        <UiInput v-model="args.modelValue" placeholder="Введите email" />
      </UiField>
    ,
  }),
}
