import React from "react";
import { MdHome } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { CiServer } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";

const Navbar = ({ closeNavBar, setShowModal }) => {
  const handleAddItemClick = () => {
    closeNavBar();
    setShowModal(true);
  };

  return (
    <div className="w-full bg-[#263238] h-full py-10 text-gray-200 font-serif">
      <ul className="flex justify-start flex-col lg:px-10 md:px-2 px-10 content-center pt-4 text-xl">
        <li className="my-4 flex items-center gap-4 justify-start cursor-pointer" onClick={closeNavBar}>
          <MdHome className="text-3xl" />
          <p>Home</p>
        </li>
        <li className="my-4 flex items-center gap-4 justify-start cursor-pointer" onClick={handleAddItemClick}>
          <MdAssignmentAdd className="text-2xl" />
          <p>Add item</p>
        </li>
        <li className="my-4 flex items-center gap-4 justify-start cursor-pointer" onClick={closeNavBar}>
          <SiAboutdotme className="text-2xl" />
          <p>About</p>
        </li>
        <li className="my-4 flex items-center gap-4 justify-start cursor-pointer" onClick={closeNavBar}>
          <CiServer className="text-2xl" />
          <p>Services</p>
        </li>
        <li className="my-4 flex items-center gap-4 justify-start cursor-pointer" onClick={closeNavBar}>
          <IoIosContact className="text-2xl" />
          <p>Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
