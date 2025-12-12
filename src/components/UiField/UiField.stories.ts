import type { Meta, StoryObj } from '@storybook/vue3'
import UiField from './UiField.vue'
import UiInput from '../UiInput/UiInput.vue'
import UiSelect from '../UiSelect/UiSelect.vue'

const meta: Meta<typeof UiField> = {
  title: 'Components/UiField',
  component: UiField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof UiField>

export const WithLabel: Story = {
  args: {
    label: 'E-mail'
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() { return { args } },
    template: '<UiField v-bind="args"><UiInput placeholder="Введите email" /></UiField>'
  })
}

export const WithSelect: Story = {
  args: {
    label: 'Выберите опцию'
  },
  render: (args) => ({
    components: { UiField, UiSelect },
    setup() {
      const options = ['Опция 1', 'Опция 2', 'Опция 3']
      return { args, options }
    },
    template: '<UiField v-bind="args"><UiSelect :options="options" /></UiField>'
  })
}
