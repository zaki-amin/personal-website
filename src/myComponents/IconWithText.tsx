import { icons } from 'lucide-react'
import { FC, ReactNode } from 'react'

interface IconWithTextProps {
  icon: ReactNode
  text: string
}

const IconWithText: FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <span className='flex items-center gap-2'>
      <span className='text-lg'>{text}</span>
      <span>{icon}</span>
    </span>
  )
}

export const HomeIcon: FC = () => {
  return <IconWithText icon={<icons.House />} text='Home' />
}

export const ExperienceIcon: FC = () => {
  return <IconWithText icon={<icons.BriefcaseBusiness />} text='Experience' />
}

export const AboutIcon: FC = () => {
  return <IconWithText icon={<icons.CircleUserRound />} text='About' />
}
