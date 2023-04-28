import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
export const LoginButton = ()=>{
  const {loginWithRedirect}= useAuth0();
  return (
    <div className="grid place-items-center h-screen">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
      <div>
        <h1 className="text-2xl text-gray-300">Autopartes Sol</h1>
        <p className="text-gray-500">Repuestos para el Automotor</p>
      </div>
      <div>
        <img
          src="https://i.ibb.co/9nNFRB1/autopartes-sol-srl.png" alt=""
          className="w-20 h-20  -mt-12 shadow-2xl rounded-full" />
      </div>
      
    </div><button className="bg-[#f07c04] p-3  justify-center flex flex-col items-center gap-2 text-center rounded-xl text-white " onClick={() => loginWithRedirect()}>Ingresar</button></div>)
};