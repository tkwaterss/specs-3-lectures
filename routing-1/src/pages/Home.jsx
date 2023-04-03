import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  }

  return (
    <>
      <div>Home</div>
      <p>
        Go to <Link to="/products">The list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler} >Navigate</button>
      </p>
    </>
  );
};

export default Home;
