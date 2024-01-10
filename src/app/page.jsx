"use client";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import React from "react";
import "/public/image-gallery.css";
import Link from "next/link";
const images = [
  {
    id: 1,
    original: "/Portada/portada_8.jpg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    button: { label: "Ver Detalles", link: "/products" },
    title: "GRUPO NOA",
  },
  {
    id: 2,
    original: "/Portada/portada_5.jpg",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description:
      "Hacemos realidad toda clase de proyectos para tu hogar o negocio, como baños, cocinas, dormitorios, estudios, oficinas y más.  ",
    title: "DISEÑA TU ESPACIO",
    button: { label: "Ver Detalles", link: "/products" },
  },
  {
    id: 3,
    original: "/Portada/portada_5.jpg",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    button: { label: "Ver Detalles", link: "/products" },
    title: "GRUPO NOA",
  },
];

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="max-sm:py-4 relative">
          <ImageGallery
            style={{ height: "80px" }}
            originalHeight={80}
            items={images}
            showThumbnails={false}
            loading="eager"
            showNav={true}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            priority={true}
            autoPlay={true}
            renderItem={(item) => (
              <div className="image-gallery-item">
                <div className="image-gallery-image">
                  <Image
                    src={item.original}
                    alt={item.description}
                    width={2500}
                    height={375}
                    className="max-sm:h-1000"
                  />
                </div>
                {item.description && (
                  <div
                    className={`image-gallery-description ${
                      item.id === 2 ? "special-slide" : ""
                    }`}
                    style={item.id === 2 ? { left: "20%" } : {}}
                  >
                    <h1 className="text-4xl max-md:text-xl text-[#f9eb37] font-bold">
                      {item.title}
                    </h1>
                    <p className="py-2  max-md:my-0 md:text-lg max-sm:py-1 max-md:text-xs md:w-80 w-full">
                      {item.description}
                    </p>
                    <button className="text-2xl text-[#363636] font-bold bg-[#f9eb37] px-7 py-3 rounded-xl  max-md:px-1 max-md:py-1 max-md:text-sm">
                      {" "}
                      <Link href={item.button.link}>{item.button.label}</Link>
                    </button>
                  </div>
                )}
              </div>
            )}
          />
        </div>

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
