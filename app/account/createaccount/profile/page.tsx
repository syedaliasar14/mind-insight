"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import User from '@/models/User';

export default function CreateProfile() {
  const inputs = [
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
    { name: 'gender', label: 'Gender', type: 'text' }
  ]

  const handleSubmit = async (event: any) => {
    event.preventDefault();

  };

  return (
    <div className='flex flex-col w-[300px] content-fill items-center'>
      <h2 className='text-3xl mb-6 gradient-text'>Profile</h2>
      <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleSubmit}>
        {inputs.map(({ name, label, type }) => (
          <div key={name} className='flex flex-col w-full'>
            <label className='text-gray-600 mb-2' htmlFor={name}>{label}<span className='text-gray-400 ml-2'>(Optional)</span></label>
            <input className='account-input' id={name} name={name} type={type} />
          </div>
        ))}
        <div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor={'otherInfo'}>{'Any other info you\'d like MindInsight to know about you?'}<span className='text-gray-400 ml-2'>(Optional)</span></label>
          <textarea className='account-input' id={'otherInfo'} name={'otherInfo'} />
        </div>
        <button className='account-button w-full mt-4' type="submit">Complete Profile</button>
      </form>
    </div>
  );
}
