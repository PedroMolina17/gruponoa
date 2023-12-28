import React from "react";

const ProjectCard = ({ imgUrl, title, price, extend }) => {
  return (
    <div>
      <div className="border-2 flex justify-center rounded-t-xl">
        <div
          className="h-52 md:h-72  border w-4/5 my-1"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        ></div>
      </div>

      <div className="text-black text-start border-b-2 border-r-2 border-l-2  rounded-b-xl">
        <h1 className="text-xl py-1 opacity-90 px-1">{title}</h1>
        <p className="text-sm opacity-90 py-1 px-1">{extend}</p>
        <p className="text-sm opacity-90 pb-1 px-1">{price}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
