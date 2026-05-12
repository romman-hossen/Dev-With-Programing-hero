import UsersList from "@/components/UsersList";
import { Skeleton } from "@heroui/react";
import { Suspense } from "react";

const getUsers = async () => {
  const res = await fetch("http://localhost:8000/profile");
  return res.json;
};
const User2 = () => {
  const usersPromise = getUsers();

  return (
    <div>
      <h2>Users2: with suspense</h2>
      <Suspense
        fallback={
          <div className="grid w-full max-w-xl grid-cols-3 gap-4">
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
          </div>
        }
      >
        <UsersList usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default User2;
