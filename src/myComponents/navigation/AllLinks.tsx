import { FC } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NavigationItem from '@/myComponents/navigation/NavigationItem'
import {
  AboutIcon,
  ContactIcon,
  ExperienceIcon,
} from '@/myComponents/IconWithText'

const AllLinks: FC = () => {
  return (
    <NavigationMenu className='p-4 mt-8'>
      <NavigationMenuList className={navigationMenuTriggerStyle()}>
        <NavigationItem href='/experience' icon={<ExperienceIcon />} />
        <NavigationItem href='/about' icon={<AboutIcon />} />
        <NavigationItem href='/contact' icon={<ContactIcon />} />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default AllLinks
