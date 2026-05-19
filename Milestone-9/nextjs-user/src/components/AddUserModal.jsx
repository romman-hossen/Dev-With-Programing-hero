'use client'
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUserModal = ({addUserAction}) => {
  return (
    <div>
      <Modal>
        <Button variant="secondary">+ Add User Form</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Contact Us</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form action={addUserAction} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" type="email">
                      <Label>Email</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" type="text">
                      <Label>Role</Label>
                      <Input placeholder="Enter your Role" />
                    </TextField>
                    {/* <TextField className="w-full" name="company">
                      <Label>Company</Label>
                      <Input placeholder="Enter your company name" />
                    </TextField>
                    <TextField className="w-full" name="message">
                      <Label>Message</Label>
                      <Input placeholder="Enter your message" />
                    </TextField> */}
                    <Modal.Footer>
                      <Button  slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">Add User</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};
export default AddUserModal;
