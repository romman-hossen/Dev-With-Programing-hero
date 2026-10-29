"use client";
import {Button, DateField, Label} from "@heroui/react";
import { Card } from "@heroui/react";

const BookingCard = ({destination}) => {
    const {price} = destination;
    return (
        <>
        <Card className="space-y-1 space-y-0 shadow-xl">
           <span >Starting from</span> 
           <h2 className="text-2xl text-cyan-500 font-medium">${price}</h2>
           <span>per person</span>
           <DateField className="w-full py-5" name="date">
      <Label>Departure Date</Label>
      <DateField.Group className={'rounded-none'}>
        <DateField.Input >{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
<Button className={'bg-cyan-500 w-full  rounded-none'}>Book Now</Button>

        </Card>         
        </>
    );
};

export default BookingCard;