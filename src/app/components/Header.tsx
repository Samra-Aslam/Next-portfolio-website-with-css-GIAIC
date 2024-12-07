import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <Link href="/" >Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/skills">Skills</Link>
            
        </nav>
    </div>
  )
}

export default Header