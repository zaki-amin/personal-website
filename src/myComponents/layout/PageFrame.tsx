import { FC, ReactNode } from 'react'

interface PageFrameProps {
  children: ReactNode
}

const PageFrame: FC<PageFrameProps> = ({ children }) => {
  return <div className='p-4 md:p-8 lg:p-12'>{children}</div>
}

export default PageFrame
