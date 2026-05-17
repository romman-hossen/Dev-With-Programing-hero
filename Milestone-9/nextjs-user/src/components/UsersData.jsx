"use client";
import { DeleteUser } from "@/app/action";
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";

const UsersData = ({ userData }) => {
  console.log("This is user data", userData);
  const handleDelete =async(userId) =>{
   await DeleteUser(userId)
  }
  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {userData.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    <Link href={`users/${user._id}`}>
                      <Button variant="outline">Details</Button>
                    </Link>
                    <Link href={`users/${user._id}`}>
                      <Button variant="secondary">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <Button variant="danger">Delete</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>
                                Delete project permanently?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete{" "}
                                <strong>My Awesome Project</strong> and all of
                                its data. This action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                Cancel
                              </Button>
                              <Button onClick={() => handleDelete(user._id)} slot="close" variant="danger">
                                Delete User permanently
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>

                    {/* <Button variant="danger">Delete</Button> */}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UsersData;
