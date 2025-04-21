import { FC } from 'react'

interface PageHeaderProps {
  title: string
}

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className='justify-items-center'>
      <h1 className='text-4xl font-semibold text-primary-200'>{title}</h1>
    </div>
  )
}

export default PageHeader
