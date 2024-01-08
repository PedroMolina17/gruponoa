"use client";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import React from "react";
import "/public/image-gallery.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  {
    original: "/Portada/portada_8.jpg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    original: "/Portada/portada_5.jpg",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    original: "https://picsum.photos/id/1019/1000/375/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

class Home extends React.Component {
  render() {
    return (
      <>
        <section className="relative">
          <div className="h-auto   w-full bg-gray-200  relative">
            <ul>
              <li className="relative">
                <Image
                  src="/img/slider_1.jpg"
                  alt="Grupo Noa"
                  width="0"
                  height="0"
                  sizes="100vh"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    layout: "fill",
                    width: "100%",
                    height: "100%",
                  }}
                  priority="true"
                ></Image>
              </li>
            </ul>

            <div className="absolute px-5 flex h-full w-full top-0 left-0 ">
              <div className=" w-full flex justify-between ">
                <button className="bg-white p-3 rounded-full opacity-40 shadow-lg text-black my-auto">
                  <FaArrowLeft />
                </button>
                <div className="w-1/2 "></div>
                <div className=" top-0 left-0 h-full w-1/2 flex mx-auto   ">
                  <div className="my-auto  mx-auto">
                    <h1 className="text-4xl font-bold text-[#f9eb37]">
                      CONTACTANOS
                    </h1>
                    <h1>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Reprehenderit, consequatur.
                    </h1>
                    <button className="bg-[#f9eb37] text-black p-2 px-6 rounded-lg text-lg ">
                      Catálogo
                    </button>
                  </div>
                </div>
                <button className="bg-white p-3 rounded-full opacity-40 shadow-lg text-black  my-auto">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        <main>
          <div className="bg-[#363636]  flex flex-col justify-center items-center  py-8 ">
            <h1 className="text-2xl">SOMOS GRUPO NOA</h1>
            <br></br>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              blanditiis quos molestias id,
              <br></br> doloremque aperiam eos veniam sapiente deleniti eum,
              sequi corporis, hic minima dicta? Officiis, laborum?
            </p>
          </div>
          <div className="bg-[#f9eb37]  text-black text-center flex justify-around items-center px-8 py-16">
            <div>
              <Image
                className="opacity-80 py-4"
                src="/img/calidad.png"
                width={80}
                height={80}
                alt="Calidad"
              ></Image>{" "}
              <p className="text-center ">CALIDAD</p>
            </div>

            <div>
              <Image
                className="opacity-90 py-4"
                src="/img/clasificacion.png"
                width={80}
                height={80}
                alt="Calidad"
              ></Image>{" "}
              <p className="text-center ">EXPERIENCIA</p>
            </div>

            <div>
              <Image
                className="opacity-80 py-4"
                src="/img/garantia.png"
                width={80}
                height={80}
                alt="Calidad"
              ></Image>{" "}
              <p className="text-center ">GARANTIA</p>
            </div>
          </div>{" "}
        </main>
      </>
    );
  }
}

export default Home;
