import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

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

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.precio * product.quantity);
		setCountProducts(countProducts - product.quantity);
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
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Uni.</h5>
            <h5>Precios</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {/* Product */}
            {allProducts.length ?
          (
            <>
                  {allProducts.map(product=>(
                     <div className="col-span-4 flex items-center gap-3"key={product.id}>
                <div>
                       <span>{product.nombre}</span>
                     </div>
                     
                     {/* Qty */}
                     <div>
                       <span>{product.quantity}</span>
                     </div>
                     {/* Price */}
                     <div>
                       <span>${product.precio},00</span>
                     </div>
                     <div><RiDeleteBin6Line onClick={()=>onDeleteProduct(product)}/></div>
                   </div>
                  ))}
              
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
<div className= "grid justify-center gap-2"><button className='bg-[#3b3b3a]   py-2 px-4 rounded-lg' onClick={onCleanCart}>
Vaciar Carrito
</button>
</div>

                </div>
             
      </div>
    </div>
    </div>
  );
};

export default Card;