import React from "react";
import "./FeaturedProducts.scss";
import Cart from "../Cart/Cart";
import BeatLoader from "react-spinners/BeatLoader";
import useFetch from "../../Hooks/useFetch";
const FeaturedProducts = ({ type }) => {
  const { data, error, loading } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          aspernatur tempora nisi. Esse ad illum voluptates facere nobis,
          impedit dolorum fugit rerum soluta, sequi veniam deleniti nisi vitae
          iusto dignissimos.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something is wrong"
          : loading
          ? <BeatLoader color="#36d7b7" />
          : data && data.map((item) =><Cart item={item} key={item.id} />)}
      </div>
    </div>
  );
};
export default FeaturedProducts;
