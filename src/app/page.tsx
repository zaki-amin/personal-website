import * as React from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NavigationItem from '@/myComponents/NavigationItem'
import { icons } from 'lucide-react'

export default function Home() {
  return (
    <NavigationMenu className='p-4'>
      <NavigationMenuList className={navigationMenuTriggerStyle()}>
        <NavigationItem name='About' href='/about' icon={<icons.BadgeHelp />} />
        <NavigationItem
          name='Projects'
          href='/project'
          icon={<icons.WalletCards />}
        />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
