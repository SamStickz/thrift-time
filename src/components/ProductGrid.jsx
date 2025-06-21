import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductGrid = () => {
  return (
    <div id="products" className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-mono text-[#1e1e1e]">
        🔥 Featured Retro Finds
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
