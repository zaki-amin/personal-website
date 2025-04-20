import { Badge } from '@/components/ui/badge'
import { FC } from 'react'
import HoverLink from '@/myComponents/navigation/HoverLink'

const CurrentRoleSummary: FC = () => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2 mb-2'>
        <Badge variant='default' className='bg-blue-700 hover:bg-blue-200'>
          Software Engineer
        </Badge>
        <Badge variant='default' className='bg-purple-700  hover:bg-purple-200'>
          Learning Technologist
        </Badge>
        <Badge variant='default' className='bg-green-700 hover:bg-green-200'>
          Teaching Fellow
        </Badge>
        <p>
          at the{' '}
          <HoverLink
            href='https://www.imperial.ac.uk/computing/'
            text='Department of Computing, Imperial College London'
          />
        </p>
      </div>
      <p className='my-4'>
        I do full-stack engineering to create educational software, including:
      </p>
      <div className='mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 px-4 bg-gray-800 rounded-md'>
        <p className='justify-center'>Requirements</p>
        <p className='justify-center'>Design</p>
        <p className='justify-center'>Frontend</p>
        <p className='justify-center'>Backend</p>
        <p className='justify-center'>DevOps</p>
        <p className='justify-center'>& More</p>
      </div>
    </div>
  )
}

export default CurrentRoleSummary
