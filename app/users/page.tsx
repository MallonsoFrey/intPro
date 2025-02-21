"use server"

import {getUsers} from '@/lib/data';
import { UserItem } from '@/components/ui/UserItem';
import { Badge } from "@/components/ui/badge"

export default async function UsersPage() {
    const users = await getUsers();

    return (
        <div className="flex flex-col items-center gap-3">
          <Badge>Users List</Badge>
          <ul>
          {users.map((user) => (
          <UserItem key={user.id} id={user.id} name={user.name} email={user.email} username={user.username} phone={user.phone}/>
          ))}
          </ul>
        </div>
    )
}