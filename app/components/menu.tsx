import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { signOut } from 'next-auth/react';

const Menu = ({ onNewSession, onOpenChatSettings, onOpenFeedback }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button className='px-1' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>
      <div className={`fixed top-0 right-0 w-[200px] bg-white shadow-xl z-20 h-screen ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform transition-all duration-500 text-gray-800`}>
        <FontAwesomeIcon
          className="m-4 text-2xl cursor-pointer right-0 text-gray-600"
          icon={faClose}
          onClick={toggleMenu}
        />
        <div
          className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer'
          onClick={() => {
            toggleMenu();
            onNewSession();
          }}>
          New Session
        </div>
        <div
          className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer'
          onClick={() => {
            toggleMenu();
            onOpenChatSettings();
          }}>
          Select Specialization
        </div>
        <div
          className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer'
          onClick={() => {
            toggleMenu();
            onOpenFeedback();
          }}>
          Send Feedback
        </div>
        <div
          className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer'
          onClick={() => {
            toggleMenu();
            signOut();
          }}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Menu;
