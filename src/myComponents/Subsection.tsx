import { FC, ReactNode } from 'react'

interface SubsectionProps {
  title: string
  children: ReactNode
}

const Subsection: FC<SubsectionProps> = ({ title, children }) => {
  return (
    <div className='px-16 md:px-32'>
      <h2 className='text-2xl font-semibold py-2 text-fuchsia-300'>{title}</h2>
      {children}
    </div>
  )
}

export default Subsection
