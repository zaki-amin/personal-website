import { ContactIcon } from '@/myComponents/IconWithText'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'

export const metadata = {
  title: 'Zaki Amin - Contact',
  description: 'The contact page of Zaki Amin',
}

export default function About() {
  return (
    <div className='h-screen flex flex-col py-16 gap-8'>
      <BreadcrumbWithIcon icon={<ContactIcon />} />
      <PageHeader title='Contact' />
    </div>
  )
}
