import { FC } from 'react'
import Link from 'next/link'

interface HoverLinkProps {
  href: string
  text: string
}

const HoverLink: FC<HoverLinkProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='text-blue-400 hover:text-cyan-400'
    >
      {text}
    </Link>
  )
}

export default HoverLink
