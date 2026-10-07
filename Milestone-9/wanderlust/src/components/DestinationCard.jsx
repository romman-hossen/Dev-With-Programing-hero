import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
 

const DestinationCard = ({destination}) => {
    const { destinationName,country,category,price,duration,imageUrl} = destination;    
    console.log("This is destination page",country)
    return (
        <div className="space-y-2">
            <div className="relative aspect-video">
                <Image
                fill
                src={imageUrl} 
                alt={destinationName} 
                className="object-cover rounded-xl"  
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>

            </div>
            <div className="flex items-center gap-1 text-gray-500 ">
                <IoLocationOutline />
                <span>{country}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-xl">{destinationName}</span>
                <span className="flex items-center"><span className="text-2xl">${price}</span>/person</span>
            </div>
            <div className="flex items-center ">
            <CiCalendarDate className="text-xl"/>
            <span>{duration}</span>
            </div>
            <span className="flex items-center text-cyan-500 underline gap-1">BOOK NOW  <GoArrowUpRight />
</span>
            
        </div>
    );
};

export default DestinationCard;