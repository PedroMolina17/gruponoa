import React from "react";

const ProjectCard = ({ imgUrl, title, price }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-black text-center bg-[#f9eb37] rounded-b-xl">
        <h5 className="py-1 opacity-90">{title}</h5>
        <p className="text-lg opacity-90">{price}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
