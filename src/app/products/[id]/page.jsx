"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
const Page = ({ params }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "955438535"; // Reemplaza esto con el número de teléfono al que deseas enviar el mensaje
    const message =
      "¡Hola! Estoy interesado en este producto: [Inserta el enlace del producto aquí]";

    // Codificar el número de teléfono y el mensaje para el enlace de WhatsApp
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedMessage = encodeURIComponent(message);

    // Crear el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappLink, "_blank");
  };

  const productData = useSelector(
    (state) => state.valores.productData[params.id - 1]
  );

  return (
    <div className="bg-white text-black grid grid-cols-2 px-36 max-md:px-2 py-14 gap-lg-0 max-md:grid-cols-1">
      {" "}
      <div className="col-span-1 flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold ">
          <Link href="/products" className="text-[#363636]">
            Productos
          </Link>
          <p className="text-[#363636] opacity-60 inline">
            /{productData.title}
          </p>
        </h1>
        <Image src={productData.imgUrl} alt="img" width={450} height={450} />
      </div>
      <div className="col-span-1 p-9 flex justify-start max-md:justify-center max-md:items-center   flex-col">
        <h1 className="font-bold text-[#363636] text-4xl">
          {productData.title}
        </h1>
        <div className=" py-3 max-sm:mr-0  max-lg:text-center xl:w-2/3 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            beatae sunt rem. Hic tenetur provident reiciendis quae quis delectus
            perferendis ea, molestias iure aliquid blanditiis velit optio odio
            recusandae assumenda.
          </p>
          <h1 className="py-5 font-bold text-[#363636]">{productData.price}</h1>
          <button
            className="py-3 px-14 bg-[#f9eb37] rounded-lg font-bold text-[#363636]"
            onClick={handleWhatsAppClick}
          >
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
