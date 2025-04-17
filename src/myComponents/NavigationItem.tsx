import Link from 'next/link'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { FC, ReactNode } from 'react'

interface NavigationItemProps {
  href: string
  icon: ReactNode
}

const NavigationItem: FC<NavigationItemProps> = ({ href, icon }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {icon}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export default NavigationItem
