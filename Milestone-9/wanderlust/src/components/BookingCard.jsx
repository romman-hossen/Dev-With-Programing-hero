"use client";
import { authClient } from "@/lib/auth-client";
import {Button, DateField, Label} from "@heroui/react";
import { Card } from "@heroui/react";
import { useState } from "react";

const BookingCard = ({destination}) => {
    const { data: session} = authClient.useSession();
    const user = session?.user;
    const {price,_id,destinationName,imageUrl,country} = destination;
    // console.log(user.id)
    // console.log(_id, user)
    const [departureDate,setDepartureDate] = useState(null); 
    const handleBooking =async () => {
        const bookingData = {
            userId: user.id,
            userName: user.name,
            userImage: user.image,
            destinationId: _id, 
            destinationName,  
            imageUrl,
            price,
            country,
            departureDate: new Date(departureDate)
        }
        const res = await fetch('http://localhost:5000/booking',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        console.log(data)    
         
    }
    return (
        <>
        <Card className="space-y-0 shadow-xl bg-gray-50">
           <span >Starting from</span> 
           <h2 className="text-2xl text-cyan-500 font-medium">${price}</h2>
           <span>per person</span>
         <DateField className="w-full py-5" name="date" onChange={setDepartureDate}>
      <Label>Departure Date</Label>
      <DateField.Group className={'rounded-none'} >
        <DateField.Input >{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <Button className={'bg-cyan-500 w-full rounded-none'} onClick={handleBooking}>Book Now</Button>
      </Card>         
        </>
    );
};
export default BookingCard;