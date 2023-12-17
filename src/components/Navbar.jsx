import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex justify-around p-4 bg-[#292c2e]">
      <div>
        <h1 className="text-3xl p-4">Grupo Noa</h1>
      </div>
      <div className="bg-red-300 flex justify-around  ">
        <ul className=" flex ">
          <Link className="p-4 " href="/">
            Home
          </Link>
          <Link className="p-4" href="#Contact">
            Contactanos
          </Link>
          <Link className="p-4" href="/">
            Home
          </Link>
          <Link className="p-4" href="/ ">
            Contactanos
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl p-4">Grupo Noa</h1>
      </div>
    </nav>
  );
}

export default Navbar;
