export interface IAvatarProps {
  size: 'sm' | 'md' | 'lg'
  src: string
  count?: number
  rounded?: boolean
  shadow?: boolean
}

const Avatar = ({
  size,
  src,
  count = 0,
  rounded = false,
  shadow = false,
}: IAvatarProps) => {
  const sizeCls = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-24 h-24 p-0.5',
  }
  return (
    <div className={` overflow-hidden p-1 inline-block relative `}>
      <img
        src={src}
        alt=''
        className={`object-cover   ${shadow && 'shadow-lg'} ${
          rounded ? 'rounded-full' : 'rounded'
        } ${sizeCls[size]}`}
      />
      {count ? (
        <div className='absolute top-0 right-0 flex items-center justify-center p-1 text-xs font-bold text-white bg-black border-2 border-white rounded-full w-7 h-7'>
          {count > 9 ? '9+' : count}
        </div>
      ) : null}
    </div>
  )
}

export default Avatar
