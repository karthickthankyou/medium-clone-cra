import Bio from 'src/components/atoms/Bio'
import Text from 'src/components/atoms/Text'
import CardFooter from 'src/components/atoms/CardFooter'
import img from 'src/assets/image.jpg'

export interface ISubMainCardProps {
  title: string
}

const SubMainCard = ({ title }: ISubMainCardProps) => (
  <div className='flex-grow mt-2 mr-0 md:mr-3'>
    <Bio src='' author='Karthick' publisher='Bootcamp' />
    <h2 className='text-lg font-bold leading-tight line-clamp-2'>{title}</h2>
    <CardFooter publishDate='Nov 8' readDuration={12} className='mt-2' />
  </div>
)

export default SubMainCard
