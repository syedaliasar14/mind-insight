"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const handleLogin = async (event: any) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    await signIn('credentials', { username, password });

    const user: User = {name: username, email: "a@b.com", password: password};
    router.push('/chat')
  };

  const addUser = async (user: User) => {
    const { name, email, password } = user;
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Error in calling the users API');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='flex flex-col w-[300px] content-fill items-center'>
      <h2 className='text-3xl mb-6 gradient-text'>Login</h2>
      <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleLogin}>
        <div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor="email">Email</label>
          <input className='account-input' name="email" type="text" />
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor="password">Password</label>
          <input className='account-input' name="password" type="password" />
        </div>
        <button className='account-button w-full mt-4' type="submit">Login</button>
      </form>
      <div>
        {error && <p>Error: {error}</p>}
      </div>
    </div>
    
  );
}
