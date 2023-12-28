import React from "react";

function ProductsTag({ name, onClick, isSelected, description }) {
  const buttonStyles = isSelected
    ? "text-black border-bg-[#ffd452] bg-[#faed4b] "
    : "text-[#363636] border-slate-600 hover:border-white";
  return (
    <div>
      <button
        className={`${buttonStyles} rounded-md border border-[#363636] sm:py-1 sm:px-3 py-1 px-3 text-lg sm:text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {description}
      </button>
    </div>
  );
}

export default ProductsTag;
