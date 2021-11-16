import Logo from 'src/components/atoms/Logo'
import { BellReg, BookmarkAlt, SearchReg } from 'src/assets'

export interface INavProps {}

const Nav = () => (
  <div className='flex items-center'>
    <Logo />
    <button type='button' className='ml-auto '>
      <SearchReg />
    </button>
    <button type='button' className='ml-3 '>
      <BookmarkAlt />
    </button>
    <button type='button' className='ml-3 '>
      <BellReg />
    </button>
    <button
      type='button'
      className='px-3 py-1.5 h-full hidden sm:block ml-3 text-sm border hover:bg-gray-50 border-black rounded-full'
    >
      Upgrade
    </button>
    <button
      type='button'
      className='w-8 h-8 ml-3 overflow-hidden rounded-full '
    >
      <img
        src='static/media/image.0c26331b.jpg'
        alt='profile'
        className='object-cover object-center w-full h-full'
      />
    </button>
  </div>
)

export default Nav
