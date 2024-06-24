import Link from "next/link";
import Menu from "./menu";

const ChatHeader = ({ resetMessages, setIsSpecModalOpen, setIsFeedbackModalOpen }: any) => {
  return (
    <div className={`flex flex-row w-full bg-white w-full p-1 px-3 shadow-xl items-center justify-between`}>
      <Link href={'/'}><div className='text-xl sm:text-2xl gradient-text'>MindInsight</div></Link>
      <Menu
        onNewSession={() => resetMessages()}
        onOpenChatSettings={() => setIsSpecModalOpen(true)}
        onOpenFeedback={() => setIsFeedbackModalOpen(true)}
      />
    </div>
  );
};

export default ChatHeader;