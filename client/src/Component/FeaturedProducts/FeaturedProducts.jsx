import React from "react";
import "./FeaturedProducts.scss";
import Cart from "../Cart/Cart";
import BeatLoader from "react-spinners/BeatLoader";
import useFetch from "../../Hooks/useFetch";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const FeaturedProducts = ({ type }) => {
  const { data, error, loading } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <Swiper 
    className="FeaturedProducts"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
    >
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
          : data && data.map((item) =><Cart item={item} key={item.id}/>)}
      </div>
    </Swiper>
  );
};
export default FeaturedProducts;
