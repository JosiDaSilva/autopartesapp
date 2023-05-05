import { useState } from 'react';

import './index.css';

import {
  RiMenu3Fill,
  RiShoppingCartFill,
  RiCloseLine
} from "react-icons/ri";
// Components

import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";


import { Route, Routes } from 'react-router-dom';
import Tienda from './components/shared/Tienda';







function App() {
 
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

 
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
   
    <div className="bg-[#262837] w-full min-h-screen">
      
           <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder}
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}
      />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        
       
        <button onClick={toggleOrders} className=" text-orange-500 grid">
        <span className=" bg- [#f07c04] rounded-tl-xl py-0 px-6 text-white rigth-0">{countProducts}</span> <RiShoppingCartFill className='' />  
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />  
                   } 
                
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          
        <Routes>
  <Route path='/' element={<Tienda/>}></Route>
  
  
  
        </Routes>
        
        
        </div>
      </main>
         
      </div>
    
   
  );
  
  }

export default App;