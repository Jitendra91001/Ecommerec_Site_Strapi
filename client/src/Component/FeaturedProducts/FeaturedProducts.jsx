import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Cart from "../Cart/Cart";
import axios from "axios";
const FeaturedProducts = ({ type }) => {
    let  products=[
          {
              id:1,
              img:"img/p6.jpg",
              img2:"img/p2.jpg",
              title:"T-Shirt for Men",
              isNew:true,
              OldPrice:45,
              price:25
          },
          {
              id:2,
              img:"img/p2.jpg",
              img2:"img/p7.jpg",
              title:"Coat",
              isNew:true,
              OldPrice:45,
              price:25
          },
          {
              id:3,
              img:"img/p3.jpg",
              img2:"img/p2.jpg",
              title:"Coat",
              isNew:false,
              OldPrice:45,
              price:25
          },
          {
              id:4,
              img:"img/p4.jpg",
              img2:"img/p5.jpg",
              title:"Coat",
              isNew:false,
              OldPrice:45,
              price:25
          }
      ]
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(process.env.REACT_APP_API_URL, {
  //         headers: {
  //           Authorization: "bearer" +process.env.REACT_APP_API_TOKEN,
  //         },
  //       });
  //       console.log(res)
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchData()
  // }, []);
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
        {products.map((item) => (
          <Cart item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
