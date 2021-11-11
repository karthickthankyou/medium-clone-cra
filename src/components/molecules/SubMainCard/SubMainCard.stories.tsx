import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SubMainCard from './SubMainCard'

export default {
  title: 'molecules/SubMainCard',
  component: SubMainCard,
} as ComponentMeta<typeof SubMainCard>

const Template: ComponentStory<typeof SubMainCard> = ({ title }) => (
  <SubMainCard title={title} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Want To Make More Money as a Developer? Start Selling APIs',
}
Primary.parameters = {}
