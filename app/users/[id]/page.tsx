"use server";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getUsers } from "@/lib/data";

async function getUser(id: string) {
  const users = await getUsers();
  return users.find((user) => user.id.toString() === id);
}

export default async function UserPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    return notFound();
  }

  const user = await getUser(params.id);

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
