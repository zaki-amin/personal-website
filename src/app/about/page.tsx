import Link from 'next/link'

export const metadata = {
  title: 'Zaki Amin - About',
  description: 'The about page of Zaki Amin',
}

export default function About() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex items-center justify-center h-1/12 '>
        <h1 className='text-2xl font-bold'>About Me</h1>
      </div>

      <div className='p-16 md:p-32'>
        <h2 className='text-2xl font-semibold py-2 text-fuchsia-300'>
          Current employment
        </h2>
        <ul className='flex-col list-disc list-inside'>
          <li>
            I work as a <i>software engineer</i> | <i>learning technologist</i>{' '}
            | <i>teaching fellow</i> in the{' '}
            <Link
              className='text-blue-400 hover:text-cyan-500'
              href='https://www.imperial.ac.uk/computing/'
              target='_blank'
            >
              Department of Computing, Imperial College London.
            </Link>
          </li>
          <li>
            I do <strong>full-stack</strong> engineering to create educational
            software: I&#39;m involved in requirements gathering, design,
            frontend, backend, DevOps, and more!
          </li>
          <li>
            I am involved in teaching:
            <ul className='list-disc list-inside pl-8'>
              <li>
                Undergraduate: I support the development operations (DevOps)
                laboratories and supervise human-centred design (HCD) projects.
              </li>
              <li>
                Postgraduate: I help with the Software Systems Engineering
                module, teaching the principles and architecture which underpin
                creating larger software systems.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
