"use client"

import { useEffect, useRef, useState } from 'react';
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpecModal from '../components/specmodal';
import FeedbackModal from '../components/feedbackmodal';
import Menu from '../components/menu';
import Link from 'next/link';
import ChatHeader from '../components/chatheader';
import Messages from '../components/messages';

export default function Home() {
  type Message = {
    role: string;
    content: string;
    isVisible: boolean;
  };

  const defaultPrompt = "You are a supportive and empathetic therapist assistant called MindInsight. Engage in chat-like conversations with the user. Don't refer a therapist.";
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([{ role: "system", content: defaultPrompt, isVisible: false }]);
  const [specialization, setSpecialization] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSendDisabled, setIsSendDisabled] = useState(!input);
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const textareaRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (isSendDisabled || isWaitingResponse || !input) return;
    setIsWaitingResponse(true);

    const userMessage = { role: 'user', content: input, isVisible: false };
    const updatedMessages: Message[] = await new Promise((resolve) => {
      setMessages((prevMessages) => {
        const updatedList = [...prevMessages, userMessage];
        updatedList[updatedList.length - 1].isVisible = true;
        resolve(updatedList);
        return updatedList;
      });
    });
    setInput('');

    try {
      const response = await generateResponse(updatedMessages);
      const responseMessage: Message = { role: response.role, content: response.content || '', isVisible: false };
      await new Promise((resolve) => {
        setMessages((prevMessages) => {
          const updatedList = [...prevMessages, responseMessage];
          updatedList[updatedList.length - 1].isVisible = true;
          resolve(updatedList);
          return updatedList;
        });
      });
    } catch (error) {
      console.error('Error generating response:', error);
    }

    setIsSendDisabled(!input);
    setIsWaitingResponse(false);
  };

  async function generateResponse(messages: Message[]) {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
  
    if (!response.ok) {
      throw new Error('Error in calling the chat API');
    }
    
    const data = await response.json();
    return data.choices[0].message;
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      setIsTitleVisible(true);
    }, 500);
  }, []);

  const resetMessages = () => {
    const newPrompt = specialization 
      ? `You are a supportive and empathetic therapist assistant called MindInsight specializing in ${specialization}. Engage in chat-like conversations with the user. Don't refer a therapist.`
      : defaultPrompt;
    setMessages([{ role: "system", content: newPrompt, isVisible: false }]);
  };

  useEffect(() => {
    if (specialization !== null) {
      resetMessages();
    }
  }, [specialization]);

  const handleSelectSpecialization = (selectedSpecialization: string) => {
    setSpecialization(selectedSpecialization);
    setIsSpecModalOpen(false);
    console.log('Specialization changed to: ' + specialization)
  };

  const messagesEmpty = () => {
    return !messages.some(message => message.role === 'assistant' || message.role === 'user')
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  return (
    <main className="flex h-screen text-white flex-col items-center w-full">
      <ChatHeader 
        resetMessages={() => resetMessages()} 
        setIsSpecModalOpen={() => setIsSpecModalOpen} 
        setIsFeedbackModalOpen={() => setIsFeedbackModalOpen}
      />
      <div className='flex flex-col items-center overflow-y-auto sm:max-w-2xl w-full p-7 pb-10'>
        {messagesEmpty() && 
          <div className={`text-5xl sm:text-7xl pt-20 sm:py-3 ${isTitleVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-20'} transition-all duration-[2000ms] cursor-default`}>MindInsight</div>
        }
        <div className="flex flex-col flex-grow overflow-y-auto w-full no-scrollbar">
          <div className='mt-auto'></div>
          {messagesEmpty() ? (
            <div className={`font-light text-lg sm:text-xl self-center pb-20 ${isTitleVisible ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-20'} transition-all duration-[2000ms] delay-[1500ms] cursor-default`}>What&apos;s on your mind?</div>
          ) : (
            <Messages messages={messages} messagesEndRef={messagesEndRef} />
          )}
        </div>
        <div className="flex flex-row w-full mt-2">
          <input
            className="w-full rounded-3xl focus:outline-none text-gray-700 py-1 px-4 shadow-xl max-h-[300px] resize-none no-scrollbar"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setIsSendDisabled(e.target.value === '');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            ref={textareaRef}
            /* rows={1} */
          />
          <button 
            className={`pl-3 ${isSendDisabled || isWaitingResponse ? 'opacity-50' : 'opactiy-100'} focus:outline-none`}
            onClick={handleSend}
            disabled={isSendDisabled || isWaitingResponse}
          >
            <FontAwesomeIcon className="shadow-xl" size="2xl" icon={faCircleArrowUp} />
          </button>
        </div>
      </div>
      <SpecModal 
        isOpen={isSpecModalOpen} 
        onClose={ () => setIsSpecModalOpen(false) } 
        onSelectSpecialization={ (s) => handleSelectSpecialization(s)}
      />
      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={ () => setIsFeedbackModalOpen(false) } 
      />
    </main>
  );
}
