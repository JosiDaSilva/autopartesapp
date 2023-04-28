import React, {useState, useCallback} from 'react'
import {  RiSearch2Line } from "react-icons/ri";

import { data } from "../../data/products";


const filterIt = (terms, arr) => {
    if ("" === terms || terms.length < 3) return arr;
    const words = terms.match(/\w+|"[^"]+"/g);
    words.push(terms);
    return arr.filter((a) => {
      const v = Object.values(a);
      const f = JSON.stringify(v).toLowerCase();
  
      return words.every(val => f.includes(val));
    });
  };
function Buscador (
 ) {
    const [products, setProducts] = useState([]);
  
    const filterList = useCallback(({target}) => {
      const searchQuery = target.value.toLowerCase();
      const updatedList = filterIt(searchQuery, data);
      setProducts(updatedList);
    }, []);
   
    
  return (
   
    <div>
    <form>
          <div className="w-full relative justify-center gap-4 mb-16">
              
              <input
                  type="text"
                  className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                  placeholder="Buscar..."
                  id="searchInput"
                  onChange={filterList}
                 
                   />
              <button type="button" className="btnBuscar "  >
                
                  <RiSearch2Line className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
              </button>
          </div>
      </form>
      <div className="  py-12  rounded-lg text-gray-300 outline-none">
      <List products={products} />
      </div>
      </div>
    
  );
};
var List = ({ products}) =>


    
   (
  <div className= "p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {products.map((product) => (
       <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300' key={product.id}>
        
          <figure>
            <img src={product.imagen} alt="" className="w-30 h-40 object-fill -mt-20 shadow-2xl rounded-full" />
          </figure>
          <div className='info-product'>
            <h2 className="text-s">{product.nombre}</h2>
            <h2 className="text-s">{product.aplicación}</h2>
            <span className='text-gray-300'>${product.precio},00</span>
          <p className="text-s">Cód. Orig: {product.código_original}</p>
        
         

   <div className="grid justify-center gap-2">
    <button  className="bg-[#f07c04] p-1 flex 
rounded-xl text-white text-center justify-center" id= "Agregar" > Agregar</button>
          
     </div>


      </div>
    </div>
  ))}
    </div>
  );

      


export default Buscador;




 
 

