

import React from "react";




const Header = () => {
  return (
    <header>
      
      {/* Title and search */}
      <div className="flex  md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Autopartes Sol</h1>
          <p className="text-gray-500">Repuestos para el Automotor</p>
        </div>
        <div>
        <img
        src="https://i.ibb.co/9nNFRB1/autopartes-sol-srl.png" alt=""
        className="w-15 h-15  -mt-10 shadow-2xl rounded-full"
      />
      
        </div>
     
      </div>
      {/* Tabs */}
      
    </header>

  );
};

export default Header;