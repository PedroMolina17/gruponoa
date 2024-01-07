"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "CONTACTO", path: "/contact" },
  { title: "PRODUCTOS", path: "/products" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="  mx-auto border border-[#33353F] top-0 right-0 left-0 bg-[#363636] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8  py-2">
        <Image
          src="/img/LOGO_WALTER-gradient.png"
          href={"/"}
          width={80}
          height={80}
          alt="Grupo Noa"
        ></Image>
        {/** Menu Overlay */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <FloatingWhatsApp
          phoneNumber="+51 934629301"
          className="text-black"
          accountName="Grupo Noa"
          avatar="img/LOGO2.png"
          chatMessage="¡Hola! 🤝 ¿Cómo lo podemos ayudar?"
        />
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};
export default Navbar;
