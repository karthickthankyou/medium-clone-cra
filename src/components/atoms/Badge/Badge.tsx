import { Link } from 'react-router-dom'

export interface IBadgeProps {
  displayText: string
  size?: 'sm' | 'md' | 'lg'
}

const Badge = ({ displayText, size = 'md' }: IBadgeProps) => {
  const sizeCls = {
    sm: 'px-1 py-0.5 text-xs',
    md: 'px-2 py-1.5 text-sm',
    lg: 'px-3 py-2 text-sm',
  }
  return (
    <Link
      to='/'
      className={`transition-all duration-300 bg-gray-200 rounded-full hover:bg-gray-300 ${sizeCls[size]}`}
    >
      {displayText}
    </Link>
  )
}

export default Badge
