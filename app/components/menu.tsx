import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { signOut } from 'next-auth/react';

const Menu = ({ onNewSession, onOpenChatSettings, onOpenFeedback }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      label: 'New Session',
      onClick: onNewSession()
    },
    {
      label: 'Select Specialization',
      onClick: onOpenChatSettings()
    },
    {
      label: 'Send Feedback',
      onClick: onOpenFeedback()
    },
    {
      label: 'Log out',
      onClick: () => signOut()
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <div
        key={index}
        className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer transition-all duration-300'
        onClick={() => {
          toggleMenu();
          item.onClick();
        }}>
        {item.label}
      </div>
    ));
  };

  return (
    <div className="relative">
      <button className='px-1 text-gray-700' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>
      <div className={`fixed top-0 right-0 w-[200px] bg-white shadow-xl z-20 h-screen ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform transition-all duration-500 text-gray-800`}>
        <FontAwesomeIcon
          className="m-4 text-2xl cursor-pointer right-0 text-gray-600"
          icon={faClose}
          onClick={toggleMenu}
        />
        {renderMenuItems()}
      </div>
    </div>
  );
};

export default Menu;

