export interface IAuthorCardProps {
  displayName: string
  about: string
  src: string
}

const AuthorCard = ({ src, displayName, about }: IAuthorCardProps) => (
  <div className='flex items-center space-x-3'>
    <img
      src={src}
      alt=''
      className='flex-shrink-0 rounded-full shadow-md w-14 h-14'
    />
    <div className='flex-grow'>
      <h2 className='text-lg font-bold line-clamp-2'>{displayName}</h2>
      <p className='max-w-sm text-sm text-gray-700 line-clamp-2'>{about}</p>
    </div>

    <button
      type='button'
      className='px-4 py-2 text-sm border border-black rounded-full hover:bg-gray-50'
    >
      Follow
    </button>
  </div>
)

export default AuthorCard
