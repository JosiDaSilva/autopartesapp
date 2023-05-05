import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import { ChangeEvent, useState } from "react";
const reg = /^(-?\d*\.?\d*)?$/gi;
const Card= ({
  showOrder,
  setShowOrder,
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
})=> {
  
 
  const [misio, setMisio] = useState(0);
  const [corr, setCorr] = useState(0);
  const handleChange = (e) => {
    const value = e.target.value;
    const matched = value.match(reg);
    if (!matched) return;

    
    setMisio(value);
    const parsedMisio = parseFloat(value);
    
    if (Number.isNaN(parsedMisio)) setMisio(0);
    else setMisio(parsedMisio);
  
  
  
  };
  const handleChange1 = (e) => {
    const value = e.target.value;
    const matched = value.match(reg);
    if (!matched) return;

    setCorr(value);
    const parsedCorr = parseFloat(value);
    
    if (Number.isNaN(parsedCorr)) setCorr(0);
    else setCorr(parsedCorr);
    
  };
  const [val, setVal] = useState(0);
  const newVal=()=>{
  setVal(val + misio + corr);
  };
  const [count, setCount] = useState("");
	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);
    
		setTotal(total - product.precio * product.quantity);
		setCount(count - product.quantity);
		setAllProducts(results);
	};
  

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};
const confirmarPedido = () =>{
  let productosParaWsp = allProducts.map(product => `- ${product.quantity} ${product.nombre} $${product.precio}`); // Le añadimos un guión delante del nombre y también el monto
  const productosConFormatoAmigable = productosParaWsp.join('\n'); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
  console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
   window.location.href = 'https://api.whatsapp.com/send?phone=543755552007&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + productosConFormatoAmigable; // Comento esta línea para no redirigir realmente en este ejemplo
};


 
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4 justify-center text.center">Pedido Actual</h1>
        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
        <div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
        </div>
        {/* Car */}
        
          <table>
          <thead className="col-span-4 gap-3">
          <tr className="grid items-center grid-cols-6 justify-between mb-6">
            <th >Item</th>
            <th>Misiones</th> 
            <th>Corrientes</th> 
            <th>Uni.</th> 
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
          </thead>
          {/* Products */}
          <div>
            {/* Product */}
            {allProducts.length ?
          (
            <> <tbody className="col-span-4 gap-3">
                  {allProducts.map(product=>(
                   
                     <tr className="grid items-center grid-cols-6 justify-between mb-6 gap-10"key={product.id}>
                <td>
                       <span className="text-sl">{product.nombre}</span>
                     </td>
                     
                     {/* Qty */}
                     <td>
                     <input
    type="number"
    class="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 text-black" min={0} max={product.stock_misiones} step="10"
    id="exampleFormControlInputNumber"
    placeholder="Elegir" 
    value={product.misio} onChange={handleChange}
    />
  
                     </td>
                     <td>
                     <input
    type="number"
    class="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 text-black"  min={0} max={product.stock_corrientes} step="10"
    id="exampleFormControlInputNumber"
    placeholder="Elegir"
    value={product.corr} onChange={handleChange1}
    />
  
                     </td>
                     
                     
                     <td>
                       <span className="px-6">{newVal}</span>
                     </td>
                     <td>
                       <span>${product.precio},00</span>
                     </td>
                     <td className="px-3"><RiDeleteBin6Line onClick={()=>onDeleteProduct(product)}/></td>
                   </tr>
                   
                  ))}
                  </tbody>
                 
                  </>
           
          ) : (
<p className='cart-empty'>El carrito está vacío</p>
          )
          
          }

<div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">

<div className="flex items-center justify-between mb-6">
  <h3>Total:</h3>
  <span className='total-pagar'>${total}</span>
</div>
<div >
  <button className="bg-[#f07c04] w-full py-2 px-4 rounded-lg " onClick={confirmarPedido}>
    Confirmar Pedido
  </button>
</div>
</div >


                </div>
             
      </table>
      <div className= "grid justify-center  gap-10"><button className='bg-[#3b3b3a]   py-2 px-4 rounded-lg' onClick={onCleanCart}>
Vaciar Carrito
</button>
</div>
    </div>
    </div>
  );
};

export default Card;