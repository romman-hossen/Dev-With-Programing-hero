'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
    const { data: session } = authClient.useSession()
    console.log(session) 

    return (
        <div className="p-4 bg-gray-800 text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto ">
            <div className="list-none flex gap-2 gap-2">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'my-bookings'}>My Bookings</Link></li>
                <li><Link href={'admin'}>Admin</Link></li>
                <li><Link href={'/add-destination'}> Add-Destinations</Link></li>
            </div>
            <Image src={"/assets/Wanderlast.png"} width={100} height={100} alt="Wanderlast logo"/>  
            <div className="flex list-none gap-2">
          <li ><Link href={'/profile'} className="flex items-center gap-1 "><FaRegUser/> Profile</Link></li>
          <li><Link href={'/signin'}>Login</Link></li>
          <li><Link href={'/signup'}>Sign Up</Link></li>        
            </div>          
        </div>
        </div>
    );
};

export default Navbar;