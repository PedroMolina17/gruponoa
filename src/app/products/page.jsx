"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import { FaSearch } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import ProductsTag from "../../components/Productstag";
import ImageChangeButton from "../../components/ImageChangeButton"; // Importa el nuevo componente

const productData = [
  {
    id: 1,
    title: "Melamina 1",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/Modelow_1.png",
    imgUrl2: "/imgb/Modelow_2.png",
    imgUrl3: "/imgr/Modelow_3.png",
    imgUrl4: "/imgy/Modelow_4.png",

    tag: ["office", "All"],
  },
  {
    id: 2,
    title: "Melamina 2",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/bg_1.jpeg",
    imgUrl2: "/img/bg_1.jpeg",
    imgUrl4: "/imgb/bg_1.jpg",

    tag: ["office", "All"],
  },
  {
    id: 3,
    title: "Melamina 2",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/Modelow2_1.png",
    imgUrl2: "/imgb/Modelow2_2.png",
    imgUrl3: "/imgr/Modelow2_3.png",
    imgUrl4: "/imgy/Modelo2_4.png",
    tag: ["office", "All"],
  },
  {
    id: 4,
    title: "Melamina 2",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/bg_1.jpeg",
    imgUrl2: "/img/bg_1.jpeg",
    tag: ["office", "All"],
  },
  {
    id: 5,
    title: "Melamina 2",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/bg_1.jpeg",
    imgUrl2: "/img/bg_1.jpeg",
    tag: ["All", "bedroom"],
  },
  {
    id: 6,
    title: "Melamina 2",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/bg_1.jpeg",
    imgUrl2: "/img/bg_1.jpeg",
    tag: ["All", "bedroom"],
  },
  {
    id: 7,
    title: "Melamina 2",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/bg_1.jpeg",
    imgUrl2: "/img/bg_1.jpeg",
    tag: ["All", "organization"],
  },
  {
    id: 8,
    title: "Melamina 2",
    price: "S/350.00",
    extend: "1500 x 1500mm / 18 mm",
    imgUrl: "/img/bg_1.jpeg",
    imgUrl2: "/img/bg_1.jpeg",
    imgUrl3: "/imgb/bg_1.jpg",
    imgUrl4: "/imgb/bg_1.jpg",
    tag: ["All", "hall"],
  },
];

const Products = () => {
  const [tag, setTag] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTag) => {
    setTag(newTag);
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
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
      <div className="bg-white opacity-90 p-4 flex justify-center">
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
        <div className="col-span-1 py-1 ">
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
                name="bedroom"
                description="Dormitorio"
                isSelected={tag === "bedroom"}
              />
              <ProductsTag
                onClick={handleTabChange}
                description="Oficina"
                name="office"
                isSelected={tag === "office"}
              />
              <ProductsTag
                onClick={handleTabChange}
                description="Organización"
                name="organization"
                isSelected={tag === "organization"}
              />
              <ProductsTag
                onClick={handleTabChange}
                description="Sala"
                name="hall"
                isSelected={tag === "hall"}
              />
            </div>
            <label>COLOR</label>
            <div className="flex ">
              {[...Array(4)].map((_, index) => (
                <ImageChangeButton
                  key={index}
                  index={index}
                  currentImageIndex={currentImageIndex}
                  onClick={handleImageChange}
                  label={``}
                />
              ))}
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
                extend={project.extend}
                imgUrl={
                  project[`imgUrl${currentImageIndex + 1}`] || project.imgUrl
                }
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
