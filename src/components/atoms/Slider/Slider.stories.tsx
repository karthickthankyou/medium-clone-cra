import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Slider from './Slider'

export default {
  title: 'atoms/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
