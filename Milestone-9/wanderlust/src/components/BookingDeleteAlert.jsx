'use client'
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { IoTrashBinOutline } from "react-icons/io5";

const BookingDeleteAlert = ({bookingId}) => {
    const handleDeleteBooking = async() =>{
      const {data:tokenData} = await authClient.token(); 
        const res = await fetch(`${process.env.SERVER_URL}/booking/${bookingId}`,{
            method:"DELETE",
            headers:{
                "content-type" : "application/json",
                authorization:`Bearer ${tokenData?.token}`
            }
        } )
        const data = res.json(); 
        window.location.reload()   
    }
    return (
        <AlertDialog>
      <Button
        className={" rounded-none border-red-500 text-red-500"}
        variant="outline"
      >
        <IoTrashBinOutline /> Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};
export default BookingDeleteAlert;