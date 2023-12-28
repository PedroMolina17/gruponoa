import React from "react";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import { FaSearch } from "react-icons/fa";

const productData = [
  {
    id: 1,
    title: "Melamina 1",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
  },
  {
    id: 2,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
  },
  {
    id: 4,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
  },
  {
    id: 3,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
  },
  {
    id: 3,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
  },
  {
    id: 3,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
  },
];

function Products() {
  return (
    <>
      <div className="bg-white opacity-90 p-8 flex justify-center">
        <div className="flex w-3/4  border-b text-black border-gray-300 p-2 ">
          <input
            type="text"
            placeholder="Buscar..."
            className="outline-none px-3 py-2 w-full"
          />
          <button className="ml-2 bg-[#f9eb37] text-black px-4 py-2 rounded">
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-5 text-black  bg-white opacity-90 ">
        <div className="col-span-1"></div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 p-8  col-span-4">
          {productData.map((product) => (
            <ProjectCard
              key={product.id}
              title={product.title}
              price={product.price}
              imgUrl={product.imgUrl}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
