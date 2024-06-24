import { marked } from 'marked';
import { useRef } from 'react';

interface MessagesProps {
  messages: Message[];
  messagesEndRef: any;
};

type Message = {
  role: string;
  content: string;
  isVisible: boolean;
};

const Messages = ({ messages, messagesEndRef } : MessagesProps) => {
  const renderMessageContent = (content: any) => {
    return { __html: marked(content) };
  };

  return (
    <>
      {messages.map((message, index) => (
        message.role != 'system' && (
          <div
            key={index}
            className= {`${message.role === 'user' ? 'self-end text-right ml-4' : 'self-start text-left mr-4'} py-1 px-3 my-1 bg-white bg-opacity-10 rounded-2xl max-w-md ${message.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-all transition-transform duration-[2000ms] delay-100`}
            ref={index === messages.length - 1 ? messagesEndRef : null}
            >
            <div dangerouslySetInnerHTML={renderMessageContent(message.content)} />
          </div>
        )
      ))}
    </>
  );
}

export default Messages;