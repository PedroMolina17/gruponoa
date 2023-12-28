"use client";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import React from "react";
import "/public/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/375/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    original: "https://picsum.photos/id/1015/1000/375/",
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
      <main>
        <div className="max-sm:py-4 opacity-70">
          <ImageGallery
            items={images}
            showThumbnails={false}
            loading="eager"
            showNav={true}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            priority={true}
          />
        </div>
        <div className="bg-[#363636]  flex flex-col justify-center items-center  py-8 ">
          <h1 className="text-2xl">SOMOS GRUPO NOA</h1>
          <br></br>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            blanditiis quos molestias id,
            <br></br> doloremque aperiam eos veniam sapiente deleniti eum, sequi
            corporis, hic minima dicta? Officiis, laborum?
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
        </div>
      </main>
    );
  }
}

export default Home;
