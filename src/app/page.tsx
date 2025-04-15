import * as React from 'react'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NavigationItem from '@/myComponents/NavigationItem'
import { icons } from 'lucide-react'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <NavigationMenu className='p-4 mt-8'>
        <NavigationMenuList className={navigationMenuTriggerStyle()}>
          <NavigationItem
            name='About'
            href='/about'
            icon={<icons.BadgeHelp />}
          />
          <NavigationItem
            name='Projects'
            href='/project'
            icon={<icons.WalletCards />}
          />
        </NavigationMenuList>
      </NavigationMenu>

      <h1 className='text-4xl font-bold text-green-300'>Zaki Amin</h1>
      <h3 className='text-2xl'>(zah - key ah - mean)</h3>

      <Image
        src='/zaki.jpg'
        alt='Zaki Amin'
        width={300}
        height={300}
        className='rounded-full'
      />
    </div>
  )
}
