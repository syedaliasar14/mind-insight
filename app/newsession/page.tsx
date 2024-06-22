"use client"
import React, { useState } from 'react';

export default function NewSession() {
  const [step, setStep] = useState(1);
  const [spec, setSpec] = useState('');
  const [tone, setTone] = useState('');

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleSpecChange = (event: any) => {
    setSpec(event.target.value);
  };

  const handleToneChange = (event: any) => {
    setTone(event.target.value);
  };

  return (
    <div className='flex flex-col bg-gray-100 items-center justfiy-center w-screen h-screen'>

      {step === 1 && (
        <div>
          <h1>Select your Specialization</h1>
          <select value={spec} onChange={handleSpecChange}>
            <option value="">Select...</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
          <button onClick={handleNextStep} disabled={!spec}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Select your Tone</h1>
          <select value={tone} onChange={handleToneChange}>
            <option value="">Select...</option>
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
          </select>
          <button onClick={handleNextStep} disabled={!tone}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Summary</h1>
          <p>Specialization: {spec}</p>
          <p>Tone: {tone}</p>
          <button onClick={() => setStep(1)}>Restart</button>
        </div>
      )}
    </div>
  );
}