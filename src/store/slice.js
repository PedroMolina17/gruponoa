import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [
    {
      id: 1,
      title: "Mesa de centro",
      price: "S/399.00",
      extend: "1500 x 1500mm / 18 mm",
      imgUrl: "/img/product_1.jpg",
      imgUrl2: "/imgb/Modelow_2.png",
      imgUrl3: "/imgr/Modelow_3.png",
      imgUrl4: "/imgy/Modelow_4.png",

      tag: ["office", "All"],
    },
    {
      id: 2,
      title: "Mesa de trabajo",
      price: "S/350.00",
      extend: "1500 x 1500mm / 18 mm",
      imgUrl: "/img/product_2m.jpg",
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
  ],
};

export const Slice = createSlice({
  name: "valores",
  initialState: initialState,
  reducers: {},
});
