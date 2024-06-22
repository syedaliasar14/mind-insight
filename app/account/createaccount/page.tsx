"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import User from '@/models/User';
import Link from 'next/link';

export default function CreateAccount() {
  const inputs = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  ]

  const handleSubmit = async (event: any) => {
    event.preventDefault();

  };

  return (
    <div className='flex flex-row content-fill items-center justify-center'>
      <div className='flex flex-col max-w-[400px] content-fill items-center'>
        <h2 className='text-3xl mb-4 gradient-text'>Create Account</h2>
        <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleSubmit}>
          {inputs.map(({ name, label, type }) => (
            <div key={name} className='flex flex-col w-full'>
              <label className='text-gray-600 mb-2' htmlFor={name}>{label}</label>
              <input className='account-input' id={name} name={name} type={type} />
            </div>
          ))}
          <button className='account-button w-full mt-4' type="submit">Create Account</button>
        </form>
        <p className='text-gray-600 mt-4'>Already have an account? <Link className='text-fav-blue1' href="/account/login">Login</Link></p>
      </div>
      {/* <div className='flex flex-col justify-center bg-gradient-to-br from-fav-blue1 to-fav-blue2 text-white w-1/3 p-8 m-8'>
        <h2 className='text-3xl mb-4'>Features</h2>
        <ul className='flex flex-col gap-2'>
          <li className='flex flex-row items-center'>
            <span className='material-symbols-rounded text-xl mr-2'>📆</span>
            Chat with your AI Assistant
          </li>
          <li className='flex flex-row items-center'>
            <span className='material-symbols-rounded text-xl mr-2'>📈</span>
            Save Emotional Analytics
          </li>
          <li className='flex flex-row items-center'>
            <span className='material-symbols-rounded text-xl mr-2'>🔒</span>
            Secure and Private
          </li>
          <li className='flex flex-row items-center'>
            <span className='material-symbols-rounded text-xl mr-2'>👓</span>
            Accessible for Everyone
          </li>
        </ul>
      </div> */}
    </div>
  );
}
