import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import NavBar2 from "../navbar/NavBar2";
import Product from "./Product";
import AddItemsModal from './AddItemsModal'

const Dashbord = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex flex-col content-center">
        <NavBar2 setShowModal={setShowModal} />

        <div className="flex justify-center content-center">
          <div className="hidden md:block lg:block w-1/5 min-h-screen ">
            <Navbar setShowModal={setShowModal} closeNavBar={() => {}} />
          </div>
          <Product showModal={showModal} />
        </div>
        <div>
          {showModal && <AddItemsModal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
