import React from "react";
import Image from "next/image";
import {
  RiWhatsappLine,
  RiMailAddLine,
  RiMapPinLine,
  RiFacebookCircleFill,
  RiTiktokFill,
  RiInstagramFill,
} from "react-icons/ri";

function Footer() {
  return (
    <main>
      <div className=" flex items-center flex-wrap justify-around max-md:flex-col my-8 gap-x-0 gap-y-4 ">
        <Image
          src="/img/LOGO_WALTER-gradient.png"
          width={120}
          height={120}
          className=" text-center"
          alt="Grupo Noa Logo"
        ></Image>
        <div className="sm:mr-16 mt-4">
          <p className="text-center">INFORMACIÓN</p>
          <a
            className="flex justify-start items-center pt-3 "
            href="https://wa.me/51934629301"
            target="_blank"
          >
            <RiWhatsappLine
              style={{ width: 30, height: 30 }}
              className="pr-1"
            />
            +51 93429301
          </a>
          <a className="flex justify-start items-center pt-0 ">
            <RiMailAddLine style={{ width: 30, height: 30 }} className="pr-1" />
            pedro.molinanoa@gmail.com
          </a>
          <a className="flex justify-start items-center pt-0 ">
            <RiMapPinLine style={{ width: 30, height: 30 }} className="pr-1" />
            Alfonso Ugarte 305
          </a>
        </div>

        <div className="sm:mr-16 mt-4">
          <p className="text-center">INFORMACIÓN</p>
          <a
            className="flex justify-start items-center pt-3 "
            href="https://wa.me/51934629301"
            target="_blank"
          >
            <RiWhatsappLine
              style={{ width: 30, height: 30 }}
              className="pr-1"
            />
            +51 93429301
          </a>
          <a className="flex justify-start items-center pt-0 ">
            <RiMailAddLine style={{ width: 30, height: 30 }} className="pr-1" />
            pedro.molinanoa@gmail.com
          </a>
          <a className="flex justify-start items-center pt-0 ">
            <RiMapPinLine style={{ width: 30, height: 30 }} className="pr-1" />
            Alfonso Ugarte 305
          </a>
        </div>

        <div className="sm:mr-16 mt-4">
          <p className="text-center">REDES</p>
          <a
            className="flex justify-start items-center pt-3 "
            href="https://wa.me/51934629301"
            target="_blank"
          >
            <RiFacebookCircleFill
              style={{ width: 30, height: 30 }}
              className="pr-1"
            />
            Grupo Noa
          </a>
          <a className="flex justify-start items-center pt-0 ">
            <RiTiktokFill style={{ width: 30, height: 30 }} className="pr-1" />
            pedro.molinanoa@gmail.com
          </a>
          <a className="flex justify-start items-center pt-0 ">
            <RiInstagramFill
              style={{ width: 30, height: 30 }}
              className="pr-1"
            />
            Alfonso Ugarte 305
          </a>
        </div>
      </div>
      <div className="flex justify-around item-center max-sm:flex-col">
        <div className="text-center py-3">
          <p>
            Copyright © 2024 | Todos los derechos reservados | Elaborado por
            GRUPO NOA
          </p>
        </div>
        <div className="text-center py-3">
          <p>
            Copyright © 2022 | Todos los derechos reservados | Elaborado por
            ALLCENTER
          </p>
        </div>
      </div>
    </main>
  );
}

export default Footer;
