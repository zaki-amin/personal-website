import { icons } from 'lucide-react'
import { FC, ReactNode } from 'react'

interface IconWithTextProps {
  icon: ReactNode
  text: string
  isHome?: boolean
}

const IconWithText: FC<IconWithTextProps> = ({ icon, text, isHome }) => {
  return (
    <span className='flex items-center gap-2'>
      <span className={isHome ? 'text-lg text-primary-200' : 'text-lg text-accent-200'}>{text}</span>
      <span className={isHome ? 'text-primary-100' : 'text-accent-100'}>{icon}</span>
    </span>
  )
}

export const HomeIcon: FC = () => {
  return <IconWithText icon={<icons.House />} text='Home' isHome/>
}

export const ExperienceIcon: FC = () => {
  return <IconWithText icon={<icons.BriefcaseBusiness />} text='Experience' />
}

export const AboutIcon: FC = () => {
  return <IconWithText icon={<icons.CircleUserRound />} text='About' />
}

export const ContactIcon: FC = () => {
  return <IconWithText icon={<icons.Mailbox />} text='Contact' />
}
