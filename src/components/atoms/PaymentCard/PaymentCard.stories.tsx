import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PaymentCard from './PaymentCard'

export default {
  title: 'atoms/PaymentCard',
  component: PaymentCard,
} as ComponentMeta<typeof PaymentCard>

const Template: ComponentStory<typeof PaymentCard> = (args) => <PaymentCard />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
