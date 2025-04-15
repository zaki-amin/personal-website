import Link from 'next/link'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { FC, ReactNode } from 'react'

interface NavigationItemProps {
  name: string
  href: string
  icon: ReactNode
}

const NavigationItem: FC<NavigationItemProps> = ({ name, href, icon }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <span className='flex items-center gap-2'>
            <span className='text-lg'>{name}</span>
            <span>{icon}</span>
          </span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export default NavigationItem
