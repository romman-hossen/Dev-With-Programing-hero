import BackBtn from "@/components/BackBtn";
import { UpdateDestination } from "@/components/UpdateDestination";
import { Button } from "@heroui/react";
import Image from "next/image";

import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { RiEdit2Line } from "react-icons/ri";

const DestinationDetailsPage = async ({ params }) => {
  // console.log("This is destination details page",params)
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  console.log("This is destination details page", destination);
  return (
    <div className="max-w-7xl  mx-auto my-32">
      <div className="flex justify-between mb-3">
        <BackBtn />
      
          <div className="flex items-center gap-2">
           <UpdateDestination />
            <Button variant="danger-soft" className="rounded-none" size="sm">
              <IoRemoveCircleOutline />
              Delete 
            </Button>
          </div>
      </div>
      <div className="min-w-5xl aspect-video relative">
        <Image
          fill
          src={destination?.imageUrl}
          alt={destination?.destinationName}
          className="min-w-full  object-cover"
        />
      </div>
      <div className="border-b-2 border-gray-100 my-10"></div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-0.5">
            <IoLocationOutline />
            <span>{destination?.country}</span> 
          </div>
          <h2 className="text-3xl">{destination?.destinationName}</h2>
          <div className="flex items-center gap-0.5">
            <CiCalendarDate className="text-xl" />
            <span>{destination?.duration}</span> 
          </div>
        </div>

        <div>
          <h3 className="text-2xl">Overview</h3>
          <p>{destination?.description}</p>

        </div>
      </div>

      {/* <div>
        <div>
             <div className="flex items-center gap-0.5 text-gray-500 ">
        <IoLocationOutline />
        <span>{destination?.country}</span>
      </div>   
        <span className="text-4xl">{destination?.destinationName}</span>
      <div className="flex items-center ">
        <CiCalendarDate className="text-xl" />
        <span>{destination?.duration}</span>
      </div>
    </div>
        </div>
        <div>
          <h3>Overview</h3>
        </div> */}
  
      </div>
    
  );
};

export default DestinationDetailsPage;
