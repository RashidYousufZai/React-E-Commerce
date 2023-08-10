import React, { useEffect } from "react";
import Hero from "../component/Hero";
import Card from "../component/Card";
import Galery from "../component/Galery";
import "./Home.scss";
import PopularItems from "../component/PopularItems";
import Payment from "../component/Payment";
import { getAllProducts } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(productCount, products, error, loading);
  return (
    <div>
      <Hero />
      <h1 className="text-center">New Arrivals</h1>
      <div className="new-items">
        {/* {products &&
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))} */}
      </div>

      <Galery />
      <PopularItems />
      <Payment />
    </div>
  );
};

export default Home;
