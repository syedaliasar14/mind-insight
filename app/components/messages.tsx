import { marked } from 'marked';
import { useEffect, useRef } from 'react';

interface MessagesProps {
  messages: Message[];
};

type Message = {
  role: string;
  content: string;
};

const Messages = ({ messages } : MessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const renderMessageContent = (content: any) => {
    return { __html: marked(content) };
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

    
  }, [messages]);

  return (
    <div className='w-full h-full flex flex-col flex-grow overflow-y-auto no-scrollbar justify-end'>
      {messages.map((message, index) => (
        message.role != 'system' && (
          <div
            key={index}
            className= {`${message.role === 'user' ? 'self-end text-right ml-4' : 'self-start text-left mr-4'} py-1 px-3 my-1 bg-white bg-opacity-10 rounded-2xl max-w-md`}
            ref={index === messages.length - 1 ? messagesEndRef : null}
            >
            <div dangerouslySetInnerHTML={renderMessageContent(message.content)} />
          </div>
        )
      ))}
    </div>
  );
}

export default Messages;