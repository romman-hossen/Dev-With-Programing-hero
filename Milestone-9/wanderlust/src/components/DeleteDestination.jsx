"use client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoRemoveCircleOutline } from "react-icons/io5";

export function DeleteDestination({destination}) {
  const {_id,destinationName} = destination;
  const handleDelete = async() => {
    const res = await fetch(`http://localhost:5000/destination/${_id}` , {
      method: "DELETE",
      headers: {
        "content-type" : "application/json",
      },
    })
    const data = await res.json();
    redirect('/destinations')
    // if(!res.ok){
    //   alert("Error ")
    // }
    // res.redirect('/destinations')
    console.log(data)
  }

  return (
    <AlertDialog>
      <Button variant="danger-soft" className="rounded-none" size="sm">
              <IoRemoveCircleOutline />
              Delete 
            </Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">               
                 <FaTriangleExclamation />
              </AlertDialog.Icon>
              <AlertDialog.Heading>Do you want to Delete Travel Package ?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
               Are you sure you want to delete <span className="font-bold text-black">{destinationName}</span>? This action cannot be undone and will permanently remove this travel package from the system.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep Account
              </Button>
              <Button className="w-full" slot="close" variant="danger" onClick={handleDelete}>
                Delete Forever
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}