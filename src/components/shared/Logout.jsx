import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="group-hover:bg-[#f07c04] p-4 flex justify-center rounded-xl text-[#f07c04] group-hover:text-white transition-colors text-2xl"onClick={() => logout({ returnTo: window.location.origin })}>
     Salir
    </button>
  );
};