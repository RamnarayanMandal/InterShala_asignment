import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import Navbar from './Navbar';

const NavBar2 = ({setShowModal}) => {
    const [showNavBar, setShowNavBar] = useState(false);

    const handleOnClick = () => {
        setShowNavBar(!showNavBar);
    }

    const closeNavBar = () => {
        setShowNavBar(false);
    }

    return (
        <>
            <div className="bg-black w-full flex px-10 justify-between items-center h-24 shadow-md text-white">
                <h1 className="text-xl font-bold">Logo</h1>
                <IoReorderThree className="text-4xl lg:hidden md:hidden cursor-pointer" onClick={handleOnClick} />
            </div>
            {showNavBar && (
                <div className="w-full top-20 absolute z-10">
                    <Navbar closeNavBar={closeNavBar} setShowModal={setShowModal} />
                </div>
            )}
        </>
    );
}

export default NavBar2;
