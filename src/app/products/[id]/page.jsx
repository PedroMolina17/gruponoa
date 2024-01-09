import React from "react";
import Image from "next/image";
const page = ({ params }) => {
  console.log(params);
  return (
    <div className="h-5/6 w-full bg-white">
      page {params.id}
      <div></div>
    </div>
  );
};

export default page;
