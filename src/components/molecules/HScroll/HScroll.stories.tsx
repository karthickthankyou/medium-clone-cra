import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from 'react-router-dom'
import Badge from 'src/components/atoms/Badge'
import Avatar from 'src/components/atoms/Avatar'
import HScroll from './HScroll'

export default {
  title: 'molecules/HScroll',
  component: HScroll,
} as ComponentMeta<typeof HScroll>

const Template: ComponentStory<typeof HScroll> = ({ children }) => (
  <HScroll>{children}</HScroll>
)

export const Primary = Template.bind({})
Primary.args = {
  children: [
    <Badge key='Hello' displayText='Hello' />,
    <Badge key='Hello 2' displayText='Hello 2' />,
    <Badge key='Hello 3' displayText='Hello 3' />,
    <Badge key='Hello 4' displayText='Hello 4' />,
    <Badge key='Hello 5' displayText='Hello 5' />,
    <Badge key='Hello 6' displayText='Hello 6' />,
    <Badge key='Hello 7' displayText='Hello 7' />,
    <Badge key='Hello 8' displayText='Hello 8' />,
    <Badge key='Hello 9' displayText='Hello 9' />,
    <Badge key='Hello 10' displayText='Hello 10' />,
  ],
}
export const Avatars = Template.bind({})
Avatars.args = {
  children: [
    <Link key='hello' to='/'>
      <Avatar
        count={70}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link key='hello2' to='/'>
      <Avatar count={9} size='lg' src='static/media/image.0c26331b.jpg' />
    </Link>,
    <Link key='hello3' to='/'>
      <Avatar
        count={6}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link key='hello4' to='/'>
      <Avatar
        count={2}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link key='hello5' to='/'>
      <Avatar
        count={0}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link key='hello6' to='/'>
      <Avatar
        count={0}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link key='hello7' to='/'>
      <Avatar count={0} size='lg' src='static/media/image.0c26331b.jpg' />
    </Link>,
    <Link key='hello8' to='/'>
      <Avatar
        count={0}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
  ],
}
