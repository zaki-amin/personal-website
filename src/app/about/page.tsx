import Subsection from '@/myComponents/Subsection'
import { AboutIcon } from '@/myComponents/IconWithText'
import Education from '@/myComponents/about/Education'
import { icons } from 'lucide-react'
import Link from 'next/link'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'

export const metadata = {
  title: 'Zaki Amin - About',
  description: 'The about page of Zaki Amin',
}

export default function About() {
  return (
    <div className='h-screen flex flex-col py-16 gap-8'>
      <BreadcrumbWithIcon icon={<AboutIcon />} />
      <PageHeader title='About' />

      <Subsection title='Education'>
        <Education />
      </Subsection>

      <Subsection title='Hobbies'>
        <ul className='list-disc pl-4'>
          <li>
            <span className='flex gap-2'>
              Music <icons.Music />
            </span>
            <ul className='list-disc pl-4'>
              <li>I play the flute in a concert band</li>
              <li>
                I sing, write and produce pop/R&B music which you can check out
                on my{' '}
                <Link
                  href='https://open.spotify.com/artist/0RxI4VysFDQKWlBRzxbv5x?si=mIadSc6jRmq1cpeFqxd96A'
                  target='_blank'
                  className='text-green-500 hover:text-blue-400'
                >
                  Spotify
                </Link>
              </li>
              <li>I am a bass in a classical choir</li>
            </ul>
          </li>
        </ul>
      </Subsection>
    </div>
  )
}
