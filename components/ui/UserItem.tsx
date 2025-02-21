"use client";

import Link from "next/link";
import { User } from "@/lib/data";
import { Button } from "./button";

export function UserItem(props: User) {
  return (
    <li className="flex items-center gap-4 mt-2">
        <p>{props.id}.</p>
        <strong>{props.name}</strong> - {props.email}
      <Link href={`/users/${props.id}`}>
        <Button variant="outline">See more</Button>
      </Link>
    </li>
  );
}
