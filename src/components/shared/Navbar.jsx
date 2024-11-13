import { useState } from 'react';
import Logo  from '../../assets/image_prev_ui.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-7 bg-[#15305b]">
      <img src={Logo} className="h-10 w-23 ml-3" alt="logo" />
      
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          <img
            className={isMenuOpen ? 'hidden' : 'block'}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="48"
            height="48"
            alt="menu"
          />
          <img
            className={isMenuOpen ? 'block' : 'hidden'}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="48"
            height="48"
            alt="close"
          />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none`}>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Home
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Products
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Pricing
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Contact
        </a>
      </div>

      <a
        href="#"
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded`}
      >
        Signin
      </a>
    </nav>
  );
};

export default Navbar;
