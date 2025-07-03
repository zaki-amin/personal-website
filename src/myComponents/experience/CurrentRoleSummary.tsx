import { Badge } from '@/components/ui/badge'
import { FC } from 'react'
import HoverLink from '@/myComponents/navigation/HoverLink'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TeachingResponsibilities from '@/myComponents/experience/TeachingResponsibilities'
import Research from '@/myComponents/experience/Research'
import SoftwareEngineering from '@/myComponents/experience/SoftwareEngineering'

const tabTriggerBase =
  'flex-1 px-4 py-2 rounded-md transition-colors w-full ' +
  'data-[state=active]:text-white data-[state=inactive]:text-gray-300 ' +
  'data-[state=inactive]:bg-gray-800'

const tabVariants = {
  software: 'data-[state=active]:bg-blue-700',
  teaching: 'data-[state=active]:bg-green-700',
  research: 'data-[state=active]:bg-purple-700',
}

const CurrentRoleSummary: FC = () => {
  return (
    <div className='space-y-8'>
      <div className='flex flex-wrap gap-2 mb-4'>
        <Badge variant='default' className='bg-blue-700 hover:bg-blue-200'>
          Software Engineering
        </Badge>
        <Badge variant='default' className='bg-green-700 hover:bg-green-200'>
          Teaching
        </Badge>
        <Badge variant='default' className='bg-purple-700 hover:bg-purple-200'>
          Research
        </Badge>
        <p>
          at the{' '}
          <HoverLink
            href='https://www.imperial.ac.uk/computing/'
            text='Department of Computing, Imperial College London'
          />
        </p>
      </div>

      <Tabs defaultValue='software' className='w-full'>
        <TabsList className='flex bg-gray-900 rounded-lg p-1 mb-2 gap-8 w-full'>
          <TabsTrigger
            value='software'
            className={`${tabTriggerBase} ${tabVariants.software}`}
          >
            Software Engineering
          </TabsTrigger>
          <TabsTrigger
            value='teaching'
            className={`${tabTriggerBase} ${tabVariants.teaching}`}
          >
            Teaching
          </TabsTrigger>
          <TabsTrigger
            value='research'
            className={`${tabTriggerBase} ${tabVariants.research}`}
          >
            Research
          </TabsTrigger>
        </TabsList>
        <TabsContent value='software'>
          <SoftwareEngineering />
        </TabsContent>
        <TabsContent value='teaching'>
          <TeachingResponsibilities />
        </TabsContent>
        <TabsContent value='research'>
          <Research />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CurrentRoleSummary
