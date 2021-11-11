import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BaseUIWrapper from './BaseUIWrapper'

export default {
  title: 'atoms/BaseUIWrapper',
  component: BaseUIWrapper,
} as ComponentMeta<typeof BaseUIWrapper>

const Template: ComponentStory<typeof BaseUIWrapper> = (args) => (
  <BaseUIWrapper>Hello</BaseUIWrapper>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
