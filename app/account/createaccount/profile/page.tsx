"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateProfile() {
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const dateOfBirth = event.target.dateOfBirth.value;
    const gender = event.target.gender.value;
    const otherInfo = event.target.otherInfo.value;

    router.push('/chat')
  };

  return (
    <div className='flex flex-col w-[300px] content-fill items-center'>
      <h2 className='text-3xl mb-6 gradient-text'>Your Profile</h2>
      <p className='text-gray-600 mb-6'>Tell <span className='gradient-text'>MindInsight</span> a little bit about yourself.</p>
      <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleSubmit}>
        <div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor='dateOfBirth'>Birthday<span className='text-gray-400 ml-2'>(Optional)</span></label>
          <input className='account-input uppercase' name='dateOfBirth' type='date' />
        </div><div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor='gender'>Gender<span className='text-gray-400 ml-2'>(Optional)</span></label>
          <input className='account-input' name='gender' type="text" />
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-gray-600 mb-2' htmlFor='otherInfo'>Any other info you&apos;d like <span className='gradient-text'>MindInsight</span> to know about you?<span className='text-gray-400 ml-2'>(Optional)</span></label>
          <textarea className='account-input' name='otherInfo' rows={4}/>
        </div>
        <button className='account-button w-full mt-4' type="submit">Complete Profile</button>
      </form>
    </div>
  );
}
