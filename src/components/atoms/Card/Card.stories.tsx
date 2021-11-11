import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './Card'

export default {
  title: 'atoms/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
