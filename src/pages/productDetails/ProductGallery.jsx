import React from "react";

import Gallery from "../../components/layout/Gallery/Gallery";
import Img4XS from "assets/PNG/pic4-sml.png";
import Img3XS from "assets/PNG/pic3-sml.png";
import Img2XS from "assets/PNG/pic2-sml.png";
import Img1XS from "assets/PNG/pic1-sml.png";
import Img4MD from "assets/PNG/pic4-md.png";
import Img3MD from "assets/PNG/pic3-md.png";
import Img2MD from "assets/PNG/pic2-md.png";
import Img1MD from "assets/PNG/pic1-md.png";
  const imgs = [
    {
      url: {xs: Img4XS, md:Img4MD},
    },
    {
      url: {xs: Img1XS, md:Img1MD},
    },
    {
      url: {xs: Img2XS, md:Img2MD},
    },
    {
      url: {xs: Img3XS, md:Img3MD},
    },
   
  ];
export default function ProductGallery(){
  return (
   <Gallery imageList={imgs} defaultImg={imgs[0]}/>
  );
};



