"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import { FaSearch } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import ProductsTag from "../../components/Productstag";
const productData = [
  {
    id: 1,
    title: "Melamina 1",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
    tag: ["Certificates", "All"],
  },
  {
    id: 2,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
    tag: ["Certificates", "All"],
  },
  {
    id: 3,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
    tag: ["Certificates", "All"],
  },
  {
    id: 4,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
    tag: ["Projects", "All"],
  },
  {
    id: 5,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
    tag: ["All", "Certificates"],
  },
  {
    id: 6,
    title: "Melamina 2",
    price: "S/350.00",
    imgUrl: "/img/bg_1.jpeg",
    tag: ["All", "Certificates"],
  },
];

const Products = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = productData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" className="bg-white py-4 ">
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
        <div className="col-span-1 py-16 ">
          <div className="text-black flex flex-col justify-center lg:items-start  mx-9 gap-2 py-6 ">
            <ProductsTag
              onClick={handleTabChange}
              name="All"
              description="Todos los Productos"
              isSelected={tag === "All"}
            />
            <div className="text-black flex flex-col justify-center lg:items-start mx-4 gap-2 py-1 ">
              <ProductsTag
                onClick={handleTabChange}
                name="Projects"
                description="Dormitorio"
                isSelected={tag === "Projects"}
              />
              <ProductsTag
                onClick={handleTabChange}
                description="Oficina  "
                name="Certificates"
                isSelected={tag === "Certificates"}
              />
            </div>
          </div>
        </div>

        <ul
          ref={ref}
          className="grid md:grid-cols-3 gap-8 md:gap-12 flex-wrap col-span-4 mx-7"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                price={project.price}
                imgUrl={project.imgUrl}
                isCertificate={project.tag.includes("Certificates")}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
