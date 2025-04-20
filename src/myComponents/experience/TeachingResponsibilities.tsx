import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const TeachingResponsibilities: FC = () => {
  return (
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
              I supervise research projects on the topic of learningø analytics.
            </li>
          </ul>
        </TabsContent>
        <TabsContent value='postgraduate'>
          <ul className='list-disc pl-8'>
            <li>
              I help deliver the Software Systems Engineering module, teaching
              the principles and architecture which underpin creating larger
              software systems.
            </li>
            <li>
              I supervise human-centred design projects at the intersection of
              software engineering and design, in collaboration with the Royal
              College of Art.
            </li>
          </ul>
          <p className='text-sm'></p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TeachingResponsibilities
