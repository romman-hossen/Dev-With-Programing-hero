import BookingDeleteAlert from "@/components/BookingDeleteAlert";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BsEyeFill } from "react-icons/bs";

const MyBookingsPage= async() => {
    const session = await authClient.getSession({
    fetchOptions:{
      headers: await headers()
    }
})
const res = await fetch('http://localhost:5000/booking');
const bookings = await res.json()
// const {destinationName,imageUrl,price,departureDate} = data;  
    return (
        <div className="max-w-7xl mx-auto">
           <h2 className="font-utile text-4xl font-bold mt-8">My Bookings</h2>
           <span className="text-gray-500">Manage and view your upcoming travel plans</span>
           <div className="space-y-6 my-5">
            {
                bookings.map((booking) =>(
                  
                 <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl shadow-2xs">
                    <Image 
                      src={booking.imageUrl}
                      alt={booking.destinationName}
                      height={200}
                      width={200}
                    />
                      <div>
              <h1 className="font-bold text-2xl">{booking.destinationName}</h1>
              <p>
                {new Date(booking.departureDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <p>Booking Id: {booking._id}</p>

              <p className="text-3xl font-bold text-cyan-500">
                ${booking.price}
              </p>

            </div>
            <div className="flex justify-end items-end gap-3">
              <BookingDeleteAlert  bookingId={booking._id} />
              <Button className="rounded-none bg-cyan-500 "><BsEyeFill /> View</Button>
            </div>

                </div> 
              
          ))}
           </div> 
        </div>
    );
};

export default MyBookingsPage;