import Link from 'next/link';
import Image from "next/image";

function Nav() {
   

  return (
    <nav className="flex justify-start items-center p-5 bg-gray-300 opacity-90 shadow-lg sticky top-0 z-20 ">
      <Image src="/Logo.jpg" alt="Logo" width={100} height={100} className='rounded-full mr-16' />

      <ul className="flex space-x-12 text-light-text1 text-xl  font-bold">
     <Link href={"#Home"}><li>Home</li></Link> 
     <Link href={"#Gallery"}><li>Gallery</li></Link> 
     <Link href={"#Trainers"}><li>Trainers</li></Link> 
     <Link href={"#Programs"}><li>Programs</li></Link> 
     <Link href={"#AboutUs"}><li>Schedule</li></Link> 
     <Link href={"#AboutUs"}><li>About Us</li></Link> 
     <Link href={"#Contact"}><li>Contact</li></Link> 
      </ul>

    </nav>
  );
}

export default Nav;
