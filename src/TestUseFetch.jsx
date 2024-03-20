import React from "react";
import useFetch from "./customHooks/useFetch";
import "./index.scss";

export default function TestUseFetch() {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const renderList = () => {
    return data.products.map((product) => (
      <p key={product.id} className="title">
        {product.title}
      </p>
    ));
  };

  return (
    <div className="main-container">
      <h1 className="title">Test Use Fetch Hook</h1>
      {pending ? <div className="loading">...loading</div> : null}
      {error ? <div className="err">{error}</div> : null}
      {data?.products?.length ? renderList() : null}
    </div>
  );
}
