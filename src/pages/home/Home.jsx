import React from "react";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Cards />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
