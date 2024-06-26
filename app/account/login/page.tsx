"use client"
import { signIn, signOut } from "next-auth/react";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loginLoading, setLoginLoading] = useState(false);
  
  const handleLogin = async (event: any) => {
    event.preventDefault();
    setLoginLoading(true);
    await signIn("google", { redirectTo: "/chat" });
    //await signOut();
    setLoginLoading(false);
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
      <form className='flex flex-col gap-4 w-full items-center' 
        onSubmit={handleLogin}>
        <div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor="email">Email</label>
          <input className='account-input' name="email" type="text" />
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor="password">Password</label>
          <input className='account-input' name="password" type="password" />
        </div>
        <button className={`account-button w-full mt-4 ${loginLoading ? 'opacity-50' : ''} flex justify-center`} type="submit" disabled={loginLoading}>
          {loginLoading ? 
            (<div className='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white'></div>
            ) : (<div>Login</div>)
          }
        </button>
      </form>
      <div>
        {error && <p>Error: {error}</p>}
      </div>
      <p className='text-gray-600 mt-4'>Don&apos;t have an account? <Link href="/account/createaccount" className='text-fav-blue1'>Sign up</Link></p>
    </div>
    
  );
}
