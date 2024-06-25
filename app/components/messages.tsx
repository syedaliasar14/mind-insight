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
    <div className='w-full h-auto flex flex-col flex-grow overflow-y-auto no-scrollbar'>
      <div className='mt-auto pt-2'></div> {/* Workaround for justify-end and overflow issue */}
      {messages.map((message, index) => (
        message.role != 'system' && (
          <div
            key={index}
            className= {`${message.role === 'user' ? 'self-end text-right ml-4' : 'self-start text-left mr-4'}
              py-1 px-3 my-1 border border-white border-opacity-50 shadow-lg rounded-2xl max-w-md`}
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