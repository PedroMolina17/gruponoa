import React from "react";

function ImageChangeButton({ index, currentImageIndex, onClick, label }) {
  const getButtonColor = (buttonIndex) => {
    switch (buttonIndex) {
      case 0:
        return "bg-red-500 h-10 w-10";
      case 1:
        return "bg-[#faed4b] h-10 w-10";
      case 2:
        return "bg-green-100 h-10 w-10";
      case 3:
        return "bg-green-500 h-10 w-10";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={() => onClick(index)}
      className={`${
        currentImageIndex === index
          ? "text-black border-2 border-[#363636]"
          : "text-[#363636]  hover:border-white"
      } ${getButtonColor(
        index
      )} rounded-md border  sm:py-1 sm:px-3 py-1 px-3 text-lg sm:text-xl cursor-pointer mr-2`}
    >
      {label}
    </button>
  );
}

export default ImageChangeButton;
