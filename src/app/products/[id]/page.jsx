"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
const Page = ({ params }) => {
  const minombre = useSelector(
    (state) => state.valores.productData[params.id - 1]
  );

  return (
    <div className="h-5/6 w-full bg-white text-black">
      page {params.id}
      <div className="text-black">{minombre.title}</div>
    </div>
  );
};

export default Page;
