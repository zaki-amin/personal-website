import Subsection from '@/myComponents/Subsection'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { AboutIcon, HomeIcon } from '@/myComponents/IconWithText'
import Education from '@/myComponents/about/Education'

export const metadata = {
  title: 'Zaki Amin - About',
  description: 'The about page of Zaki Amin',
}

export default function About() {
  return (
    <div className='h-screen flex flex-col py-16 gap-12'>
      <Breadcrumb className='px-16'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>
              <HomeIcon />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              <AboutIcon />
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='justify-items-center'>
        <h1 className='text-4xl font-semibold text-emerald-200'>About</h1>
      </div>

      <Subsection title='Education'>
        <Education />
      </Subsection>
    </div>
  )
}
