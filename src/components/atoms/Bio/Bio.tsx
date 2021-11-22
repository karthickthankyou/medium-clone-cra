import { Link } from 'react-router-dom'
import Avatar from '../Avatar'

export interface IBioProps {
  src: string
  author: string
  publisher?: string
}

const Bio = ({ src, author, publisher }: IBioProps) => (
  <div className='flex items-center text-xs'>
    <Link to='/'>
      <Avatar
        size='md'
        // src='https://api.adorable.io/avatars/285/10@adorable.io.png'
        src={src}
      />
    </Link>
    <Link className='mx-1 font-semibold' to='/'>
      {author}
    </Link>
    {publisher ? (
      <>
        <div className='mr-1'>in</div>{' '}
        <Link className='font-semibold' to='/'>
          {publisher}
        </Link>
      </>
    ) : null}
  </div>
)

export default Bio
