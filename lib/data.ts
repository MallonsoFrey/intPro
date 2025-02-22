'use server'

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    phone: string;
    website?: string;
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export async function getUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store", 
    });

    if (!res.ok) {
        throw new Error("Ошибка загрузки пользователей");
    }

    return res.json(); 
}

