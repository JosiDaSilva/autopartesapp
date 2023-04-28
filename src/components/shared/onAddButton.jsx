import React from "react";



 const onAddButton = (
    allProducts,
  setAllProducts,
  countProducts,
	setCountProducts,
	total,
	setTotal
) => {
    const onAddProduct = (product) => {
    if(allProducts.find(item=>item.id ===product.id)){
     
  const products= allProducts.map(item=>item.id===product.id 
    ? 
     
     { ...item, quantity: item.quantity  + 1}
            : item
    );
    
    setTotal(total + product.precio * product.quantity);
    setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
     
  }
  setTotal(total + product.precio * product.quantity);
          setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, {...product}]);
}
      return(
        <div className="grid justify-center gap-2">
        <button  className="bg-[#f07c04] p-1 flex 
    rounded-xl text-white text-center justify-center" id= "Agregar"  onClick={()=>onAddProduct()}> Agregar</button>
              
         </div>
         
      );
      
    };

   export default onAddButton;