"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
const Page = ({ params }) => {
  const productData = useSelector(
    (state) => state.valores.productData[params.id - 1]
  );

  return (
    <div className="bg-white text-black grid grid-cols-2 px-3 py-14 gap-lg-0">
      {" "}
      <div className="col-span-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[#363636]">
          <Link href="/products" className="">
            Productos
          </Link>
          /{productData.title}
        </h1>
        <Image src={productData.imgUrl} alt="img" width={450} height={450} />
      </div>
      <div className="col-span-1 p-9 flex justify-start flex-col">
        <h1 className="font-bold text-[#363636] text-4xl">
          {productData.title}
        </h1>
        <div className="mr-80 py-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            beatae sunt rem. Hic tenetur provident reiciendis quae quis delectus
            perferendis ea, molestias iure aliquid blanditiis velit optio odio
            recusandae assumenda.
          </p>
          <h1 className="py-5">{productData.price}</h1>
          <button className="py-3 px-14 bg-[#f9eb37] rounded-lg">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
