import { ContactIcon } from '@/myComponents/IconWithText'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import Subsection from '@/myComponents/Subsection'
import HoverLink from '@/myComponents/navigation/HoverLink'
import PageFrame from '@/myComponents/layout/PageFrame'
import EmailForm from '@/myComponents/contact/EmailForm'

export const metadata = {
  title: 'Zaki Amin - Contact',
  description: 'The contact page of Zaki Amin',
}

export default function About() {
  return (
    <PageFrame>
      <div className='h-screen flex flex-col py-16 gap-8'>
        <BreadcrumbWithIcon icon={<ContactIcon />} />
        <PageHeader title='Contact' />

        <Subsection title='Profiles'>
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

        <Subsection title='Get In Touch!'>
          <EmailForm />
        </Subsection>
      </div>
    </PageFrame>
  )
}
