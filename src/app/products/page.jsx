import React from "react";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
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
      <div className="grid grid-cols-5 ">
        <div className="col-span-1"></div>
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 p-8  col-span-4">
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
