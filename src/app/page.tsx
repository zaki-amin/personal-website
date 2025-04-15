import * as React from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NavigationItem from '@/myComponents/NavigationItem'

export default function Home() {
  return (
    <NavigationMenu className='p-4'>
      <NavigationMenuList className={navigationMenuTriggerStyle()}>
        <NavigationItem name='About' href='/about' />
        <NavigationItem name='Projects' href='/project' />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
