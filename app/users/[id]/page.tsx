"use server";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getUsers } from "@/lib/data";
import { User } from "@/lib/data";

type UserId = string;
async function getUsersMap(): Promise<Record<UserId, User>> {
  const users = await getUsers();
  
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as Record<UserId, User>);
}

async function getUser(id: UserId): Promise<User | undefined> {
  const usersMap = await getUsersMap();
  return usersMap[id];
}

type UserPageProps = {
  params: Promise<{ id: string }>
}

export default async function UserPage({ params }: UserPageProps) {
  const id = (await params).id

  if (!id) {
    return notFound();
  }

  const user = await getUser(id);

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-2">
      <h1 className="py-2"><strong>{user.name}</strong></h1>
      <div>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <Link href="/">
        <Button>Back to the list</Button>
      </Link>
    </div>
  );
}
