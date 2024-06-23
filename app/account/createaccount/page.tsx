"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import User from '@/models/User';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function CreateAccount() {
  const inputs = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  ]
  const [error, setError] = useState<string | null>(null);
  const [passwordMatches, setPasswordMatches] = useState(true);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleCreateAccount = async (event: any) => {
    event.preventDefault();
    setError(null);
    setPasswordMatches(true);
    setLoading(true);

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      setPasswordMatches(false);
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      setPasswordMatches(false);
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      setPasswordMatches(false);
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setPasswordMatches(false);
      setLoading(false);
      return;
    }

    const user = new User({ name, email, password });

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const result: { error?: string } = await response.json();
      if (result?.error) {
        throw new Error(result.error);
      } else {
        //await signIn('credentials', { email, password });
        router.push('/account/createaccount/profile');
      }
    } catch (error: any) {
      console.log(error.message);
      if (error.message.includes('E11000')) {
        setError('Email already exists');
      } else {
        setError('Error creating account. Please try again.');
      }
    }
    finally {
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    if (loading) {
      buttonRef.current?.classList.add('cursor-not-allowed');
      buttonRef.current?.setAttribute('disabled', 'disabled');
    } else {
      buttonRef.current?.classList.remove('cursor-not-allowed');
      buttonRef.current?.removeAttribute('disabled');
    }
  }, [loading]);

  return (
    <div className='flex flex-row content-fill items-center justify-center'>
      <div className='flex flex-col w-[300px] content-fill items-center'>
        <h2 className='text-3xl mb-6 gradient-text'>Create Account</h2>
        <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleCreateAccount}>
          {inputs.map(({ name, label, type }) => (
            <div key={name} className='flex flex-col w-full'>
              <label className='text-gray-600 mb-2' htmlFor={name}>{label}</label>
              <input className={`account-input ${name === 'password' || name === 'confirmPassword' && !passwordMatches && 'ring-2 ring-red-500 ring-opacity-50'}`} id={name} name={name} type={type} />
            </div>
          ))}
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button className={`account-button w-full ${loading ? 'opacity-50' : 'cursor-not-allowed'} flex justify-center`}
            type="submit" ref={buttonRef} disabled={loading}
            >
              {loading ?
                (<div className='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white'></div>
                ) : (<div>Create Account</div>)
              }
            </button>
        </form>
        <p className='text-gray-600 mt-4'>Already have an account? <Link className='text-fav-blue1' href="/account/login">Login</Link></p>
      </div>
    </div>
  );
}


