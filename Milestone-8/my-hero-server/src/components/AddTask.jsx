"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, ListBox, Modal, Surface, TextField,Select } from "@heroui/react";

export function AddTask({ addATask }) {
  console.log(addATask);
  return (
    <Modal>
      <Button variant="secondary">Add a Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={addATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your Task Title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your Task Description" />
                  </TextField>
                  <Select className="w-[256px]" placeholder="Select one" name="priority">
                    <Label>Priority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="high" textValue="High">
                          High
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="Medium">
                          Medium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="low" textValue="Low">
                          Low
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                  <Select name="status" className="w-[256px]" placeholder="Select one">
                    <Label>Status</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="high" textValue="High">
                          Pending
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="Medium">
                          In Progress
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="low" textValue="Low">
                          Completed
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                 
                  <Modal.Footer>
                    <Button variant="secondary">Cancel</Button>
                    <Button type="submit">Submit</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
