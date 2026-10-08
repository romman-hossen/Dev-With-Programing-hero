import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
 

const DestinationCard = ({destination}) => {
    const { destinationName,country,_id,price,duration,imageUrl} = destination;    
    console.log("This is destination page",country)
    return (
        <div className="space-y-2 border border-gray-200 shadow rounded-xl p-3 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="relative aspect-video">
                <Image
                fill
                src={imageUrl} 
                alt={destinationName} 
                className="object-cover rounded-xl"  
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>

            </div>
            <div className="flex items-center gap-0.5 text-gray-500 ">
                <IoLocationOutline />
                <span>{country}</span>
            </div>
            <div className="flex items-center justify-between gap-2">
                <span className="text-lg">{destinationName}</span>
                <span className="flex items-center"><span className="text-2xl">${price}</span >/person</span>
            </div>
            <div className="flex items-center ">
            <CiCalendarDate className="text-xl"/>
            <span>{duration}</span>
            </div>
            <Link href={`/destinations/${_id}`}>
                   <span className="flex items-center text-cyan-500 underline gap-1 hover:text-shadow-cyan-200"><span>BOOK NOW  </span><GoArrowUpRight />
             </span>
            </Link>
     
            
        </div>
    );
};

export default DestinationCard;