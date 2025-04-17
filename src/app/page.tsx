import * as React from 'react'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NavigationItem from '@/myComponents/NavigationItem'
import { AboutIcon, ExperienceIcon } from '@/myComponents/IconWithText'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <NavigationMenu className='p-4 mt-8'>
        <NavigationMenuList className={navigationMenuTriggerStyle()}>
          <NavigationItem href='/experience' icon={<ExperienceIcon />} />
          <NavigationItem href='/about' icon={<AboutIcon />} />
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
