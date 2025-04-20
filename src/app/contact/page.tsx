import { ContactIcon } from '@/myComponents/IconWithText'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import Subsection from '@/myComponents/Subsection'
import HoverLink from '@/myComponents/navigation/HoverLink'

export const metadata = {
  title: 'Zaki Amin - Contact',
  description: 'The contact page of Zaki Amin',
}

export default function About() {
  return (
    <div className='h-screen flex flex-col py-16 gap-8'>
      <BreadcrumbWithIcon icon={<ContactIcon />} />
      <PageHeader title='Contact' />

      <Subsection title='Links'>
        <ul className='list-disc pl-8'>
          <li>
            <HoverLink
              href='https://www.linkedin.com/in/zaki-amin/'
              text='LinkedIn'
            />
          </li>
          <li>
            <HoverLink href='https://github.com/zaki-amin' text='GitHub' />
          </li>
        </ul>
      </Subsection>
    </div>
  )
}
