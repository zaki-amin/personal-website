import Link from 'next/link'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { FC } from 'react'

interface NavigationItemProps {
  name: string
  href: string
}

const NavigationItem: FC<NavigationItemProps> = ({ name, href }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export default NavigationItem
