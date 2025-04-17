import Subsection from '@/myComponents/Subsection'
import SkillsBadges from '@/myComponents/SkillsBadges'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata = {
  title: 'Zaki Amin - About',
  description: 'The about page of Zaki Amin',
}

export default function About() {
  return (
    <div className='h-screen flex flex-col py-16 gap-12'>
      <div className='justify-items-center'>
        <h1 className='text-4xl font-semibold py-2 text-emerald-200'>About</h1>
      </div>

      <Subsection title='Current employment'>
        <div className='space-y-6 px-2'>
          <div className='space-y-3'>
            <h3 className='text-lg font-medium'>Role</h3>
            <div className='flex flex-wrap gap-2 mb-2'>
              <Badge
                variant='default'
                className='bg-blue-700 hover:bg-blue-200'
              >
                Software Engineer
              </Badge>
              <Badge
                variant='default'
                className='bg-purple-700  hover:bg-purple-200'
              >
                Learning Technologist
              </Badge>
              <Badge
                variant='default'
                className='bg-green-700 hover:bg-green-200'
              >
                Teaching Fellow
              </Badge>
              <p>
                at the{' '}
                <a
                  href='https://www.imperial.ac.uk/computing/'
                  target='_blank'
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium'
                >
                  Department of Computing, Imperial College London
                </a>
              </p>
            </div>
          </div>

          <div className='space-y-3'>
            <h3 className='text-lg font-medium'>Software Engineering</h3>
            <div className='bg-gray-50 dark:bg-gray-800 p-4 rounded-md'>
              <p>
                I do <span className='font-medium'>full-stack</span> engineering
                to create educational software, including:
              </p>
              <div className='mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 px-4'>
                <p className='justify-center'>Requirements</p>
                <p className='justify-center'>Design</p>
                <p className='justify-center'>Frontend</p>
                <p className='justify-center'>Backend</p>
                <p className='justify-center'>DevOps</p>
                <p className='justify-center'>& More</p>
              </div>
            </div>
          </div>

          <div className='space-y-3'>
            <h3 className='text-lg font-medium'>Teaching Responsibilities</h3>
            <Tabs defaultValue='undergraduate' className='w-full'>
              <TabsList className='grid w-full grid-cols-2 '>
                <TabsTrigger
                  value='undergraduate'
                  className='data-[state=active]:bg-gray-600'
                >
                  Undergraduate
                </TabsTrigger>
                <TabsTrigger
                  value='postgraduate'
                  className='data-[state=active]:bg-gray-600'
                >
                  Postgraduate
                </TabsTrigger>
              </TabsList>
              <TabsContent value='undergraduate'>
                <ul className='list-disc pl-8'>
                  <li>
                    I support and assess development operations (DevOps) via
                    laboratories and code reviews respectively. and supervise
                    human-centred design (HCD) projects.
                  </li>
                  <li>
                    I supervise research projects on the topic of learningø
                    analytics.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value='postgraduate'>
                <ul className='list-disc pl-8'>
                  <li>
                    I help deliver the Software Systems Engineering module,
                    teaching the principles and architecture which underpin
                    creating larger software systems.
                  </li>
                  <li>
                    I supervise human-centred design projects at the
                    intersection of software engineering and design, in
                    collaboration with the Royal College of Art.
                  </li>
                </ul>
                <p className='text-sm'></p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Subsection>

      <Subsection title='Skills'>
        <SkillsBadges />
      </Subsection>
    </div>
  )
}
