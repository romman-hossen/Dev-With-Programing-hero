import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="list-none flex gap-2 gap-2">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'destination'}>Destinations</Link></li>
                <li><Link href={'my-bookings'}>My Bookings</Link></li>
                <li><Link href={'admin'}>Admin</Link></li>
            </div>
            <Image src={"/assets/Wanderlast.png"} width={100} height={100} alt="Wanderlast logo"/>  
            <div className="flex list-none gap-2">
          <li ><Link href={'/profile'} className="flex items-center gap-1 "><FaRegUser/> Profile</Link></li>
          <li><Link href={'/login'}>Login</Link></li>
          <li><Link href={'/sign-up'}>Sign Up</Link></li>        
            </div>          
        </div>
    );
};

export default Navbar;