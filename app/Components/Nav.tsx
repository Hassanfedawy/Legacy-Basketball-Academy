"use client"
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 opacity-90 shadow-lg sticky top-0 z-20">
      <div className="flex justify-between items-center p-5">
        <Image src="/Photos/Logo.jpg" alt="Logo" width={100} height={100} className="rounded-full" />
        
        <FontAwesomeIcon
        icon={faBars}
        size='2x'
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl cursor-pointer"
        >
          
        </FontAwesomeIcon>

        <ul className="hidden md:flex space-x-12 text-light-text1 absolute left-40 text-xl font-bold">
          <Link href={"#Home"}><li>Home</li></Link>
          <Link href={"#Gallery"}><li>Gallery</li></Link>
          <Link href={"#Trainers"}><li>Trainers</li></Link>
          <Link href={"#Programs"}><li>Programs</li></Link>
          <Link href={"#AboutUs"}><li>Schedule</li></Link>
          <Link href={"#AboutUs"}><li>About Us</li></Link>
          <Link href={"#Contact"}><li>Contact</li></Link>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col items-center absolute right-0 md:hidden space-y-2  text- bg-gray-300 opacity-80">
          
          <Link href={"#Home"} className='font-semibold text-lg text-black cursor-pointer hover:bg-gray-100 p-4'><li>Home</li></Link>

          <Link href={"#Gallery"} className='font-semibold text-lg text-black cursor-pointer hover:bg-gray-100 p-4'><li>Gallery</li></Link>

          <Link href={"#Trainers"} className='font-semibold text-lg text-black cursor-pointer hover:bg-gray-100 p-4'><li>Trainers</li></Link>

          <Link href={"#Programs"} className='font-semibold text-lg text-black cursor-pointer hover:bg-gray-100 p-4'><li>Programs</li></Link>

          <Link href={"#AboutUs"} className='font-semibold text-lg text-black cursor-pointer hover:bg-gray-100 p-4'><li>Schedule</li></Link>

          <Link href={"#AboutUs"} className='font-semibold text-lg text-black cursor-pointer hover:bg-gray-100 p-4'><li>About Us</li></Link>

          <Link href={"#Contact"} className='font-semibold text-lg text-black cursor-pointer hover:bg-gray-100 p-4'><li>Contact</li></Link>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
