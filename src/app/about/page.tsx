import Subsection from '@/myComponents/Subsection'
import { AboutIcon } from '@/myComponents/IconWithText'
import Education from '@/myComponents/about/Education'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import Hobbies from '@/myComponents/about/Hobbies'
import PageFrame from '@/myComponents/layout/PageFrame'

export const metadata = {
  title: 'Zaki Amin - About',
  description: 'The about page of Zaki Amin',
}

export default function About() {
  return (
    <PageFrame>
      <div className='h-screen flex flex-col py-16 gap-8'>
        <BreadcrumbWithIcon icon={<AboutIcon />} />
        <PageHeader title='About' />

        <Subsection title='Education'>
          <Education />
        </Subsection>

        <Subsection title='Hobbies'>
          <Hobbies />
        </Subsection>
      </div>
    </PageFrame>
  )
}
