import React, { FC } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface SkillCategoryProps {
  title: string
  items: { name: string; color: string }[]
}

const SkillCategory: FC<SkillCategoryProps> = ({ title, items }) => (
  <div>
    <h3 className='text-sm font-bold mb-2'>{title}</h3>
    <div className='flex flex-wrap gap-2'>
      {items.map((item) => (
        <Badge
          key={item.name}
          variant='secondary'
          className={`${item.color} text-white hover:${item.color}`}
        >
          {item.name}
        </Badge>
      ))}
    </div>
  </div>
)

const SkillsDisplay: FC = () => {
  const skills = {
    languages: [
      { name: 'Python', color: 'bg-sky-600' },
      { name: 'Java', color: 'bg-red-500' },
      { name: 'TypeScript', color: 'bg-blue-500' },
      { name: 'JavaScript', color: 'bg-yellow-600' },
      { name: 'C', color: 'bg-gray-500' },
      { name: 'Kotlin', color: 'bg-purple-500' },
    ],
    frameworks: [
      { name: 'React', color: 'bg-cyan-500' },
      { name: 'Node.js', color: 'bg-green-700' },
      { name: 'Next.js', color: 'bg-black' },
      { name: 'FastAPI', color: 'bg-teal-600' },
      { name: 'Flask', color: 'bg-gray-700' },
      { name: 'Django', color: 'bg-emerald-600' },
      { name: 'PyTorch', color: 'bg-red-700' },
    ],
  }

  return (
    <div className='space-y-6'>
      <Card>
        <CardContent>
          <div className='space-y-4'>
            <SkillCategory
              title='Programming Languages'
              items={skills.languages}
            />
            <SkillCategory
              title='Frameworks & Libraries'
              items={skills.frameworks}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillsDisplay
