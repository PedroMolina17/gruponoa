import React from "react";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, price, extend, id }) => {
  return (
    <div className="hover:scale-105 hover:transition-transform">
      <div className="border-2 flex justify-center rounded-t-xl">
        <div
          className="h-52 md:h-72   w-72 my-1"
          style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
        ></div>
      </div>

      <div className="text-black text-center border-b-2 border-r-2 border-l-2  rounded-b-xl py-2 ">
        <h1 className="text-2xl py-1 opacity-90 px-1 font-bold">{title}</h1>
        <p className="text-md opacity-90 pb-1 px-1 font-bold">{price}</p>

        <div className=" my-5">
          <Link
            className="bg-[#f9eb37]  px-7 py-3 rounded-md font-bold"
            href={`products/${id}`}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
