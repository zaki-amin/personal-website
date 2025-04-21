import Subsection from '@/myComponents/Subsection'
import SkillsBadges from '@/myComponents/experience/SkillsBadges'
import { ExperienceIcon } from '@/myComponents/IconWithText'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import CurrentRoleSummary from '@/myComponents/experience/CurrentRoleSummary'
import TeachingResponsibilities from '@/myComponents/experience/TeachingResponsibilities'
import PageFrame from '@/myComponents/layout/PageFrame'

export const metadata = {
  title: 'Zaki Amin - Experience',
  description: 'The experience page of Zaki Amin',
}

export default function Experience() {
  return (
    <PageFrame>
      <div className='h-screen flex flex-col py-16 gap-4'>
        <BreadcrumbWithIcon icon={<ExperienceIcon />} />
        <PageHeader title='Experience' />

        <Subsection title='Current role'>
          <div className='space-y-6 px-2'>
            <CurrentRoleSummary />
            <TeachingResponsibilities />
          </div>
        </Subsection>

        <Subsection title='Skills'>
          <SkillsBadges />
        </Subsection>
      </div>
    </PageFrame>
  )
}
