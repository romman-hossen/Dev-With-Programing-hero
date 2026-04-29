import { Input, Label, TextField,Select, ListBox, Button, Surface, Modal} from '@heroui/react';
import React from 'react';

const NewPage = () => {
    return (
        <div>
            <h3>Add Task</h3>
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
                                <Button variant="secondary">Cancel</Button>
                                <Button type="submit">Submit</Button>

                              </Select>
                             
                         
                            </form>
                          </Surface>
                        </Modal.Body>
            
        </div>
    );
};

export default NewPage;