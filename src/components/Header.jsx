import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-sky-500 text-black p-2'>
      <div className='flex justify-between'>
      <Link href={"/"} className='text-sm font-medium'>My App</Link>
      <nav className='flex gap-3 text-sm font-medium'>
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/about-us"}>About Us</Link>
        <Link href={"/contact-us"}>Contact Us</Link>
      </nav>
    </div>
    </header>
  )
}

export default Header