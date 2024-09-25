import Link from 'next/link'
import React from 'react'

const NavItem = ({dLink, label}) => {
  return  <li>
  <Link  className="text-gray-500 transition hover:text-gray-500/75" href={dLink}> {label} </Link>
</li>
}

export default NavItem