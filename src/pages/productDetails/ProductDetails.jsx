import React from "react";

import StorageCapacity from "./components/StorageCapacity/StorageCapacity";
import ProductQuantity from "./components/ProductQuantity/ProductQuantity";
import OrderShipping from "./components/OrderShipping/OrderShipping";
import ProductColor from "./components/ProductColor/ProductColor";
import ProductStock from "./components/ProductStock/ProductStock";
import TotalPrice from "./components/TotalPrice/TotalPrice";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Rating from "components/common/Rating/Rating";
import ProductGallery from "./ProductGallery";
import ProductCode from "./components/ProductCode";
import "./Style.css";

function ProductDetails() {
  return (
    <div>
      <div className="productPage-container">
        <ProductGallery />
        <div className="details-container">
          <header>
            <h2>
              Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone
              Wholesale{" "}
            </h2>
          </header>
          <div className="details-row">
            <ProductCode code={"578902-00"} />
            <Rating />
          </div>
          <div className="details-row">
            <ProductStock
              stock={"10 - 25 Pieces"}
              pricing={"AED 1,150,50.00"}
            />
            <ProductStock stock={"10-19 Pieces"} pricing={"$1,145.00"} />
            <ProductStock stock={"50+ Pieces"} pricing={"$1,145.00"} />
          </div>
          <ProductColor />
          <StorageCapacity />
          <ProductQuantity />
          <OrderShipping />
          <TotalPrice />
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
