import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar() {
    const links = <>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href={'/services'}>Services</Link></li>
                    <li><Link href={'/blog'}>Blog</Link></li>
                    <li><Link href={'/contact'}>Contact</Link></li>
                  </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base">
            {links}
        </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl">
        <Image src={'/assets/logo.svg'} width={50} height={50}/>
        </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
            {links}
        </ul>
    </div>
    <div className="navbar-end gap-1">
        <span className='text-lg'><HiOutlineShoppingBag /></span>
        <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <a className="btn">Appointment</a>
    </div>
    </div>
  )
}
