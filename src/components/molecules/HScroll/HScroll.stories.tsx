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
    <Badge displayText='Hello' />,
    <Badge displayText='Hello 2' />,
    <Badge displayText='Hello 3' />,
    <Badge displayText='Hello 4' />,
    <Badge displayText='Hello 5' />,
    <Badge displayText='Hello 6' />,
    <Badge displayText='Hello 7' />,
    <Badge displayText='Hello 8' />,
    <Badge displayText='Hello 9' />,
    <Badge displayText='Hello 10' />,
  ],
}
export const Avatars = Template.bind({})
Avatars.args = {
  children: [
    <Link to='/'>
      {' '}
      <Avatar
        count={70}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link to='/'>
      {' '}
      <Avatar count={9} size='lg' src='static/media/image.0c26331b.jpg' />{' '}
    </Link>,
    <Link to='/'>
      {' '}
      <Avatar
        count={6}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link to='/'>
      {' '}
      <Avatar
        count={2}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link to='/'>
      {' '}
      <Avatar
        count={0}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link to='/'>
      {' '}
      <Avatar
        count={0}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
    <Link to='/'>
      {' '}
      <Avatar count={0} size='lg' src='static/media/image.0c26331b.jpg' />
    </Link>,
    <Link to='/'>
      {' '}
      <Avatar
        count={0}
        rounded
        size='lg'
        src='static/media/image.0c26331b.jpg'
      />
    </Link>,
  ],
}
