import React, { useState } from "react";

import "./Style.css"
import SelectedImages from "./SelectedImages";
import Images from "./Images";


 const Gallery =  ({imageList = [], defaultImg})=>{
  const [selectedImg, setSelectedImg] = useState(defaultImg? defaultImg : imageList[0]);
 
  
  
  return (
    <div className="gallery-container">
      <SelectedImages selectedImg={selectedImg?.url?.md} />
      <Images
        images={imageList}
        selectImg={selectedImg?.url?.md}
        setSelectedImages={setSelectedImg}
      />
    </div>
  );
};
export default Gallery;



