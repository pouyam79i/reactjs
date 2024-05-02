import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [Products, setProducts] = useState<String[]>([]);

  useEffect(()=>{
    console.log("Fetching Products")
    setProducts(['Laptop', 'Smart Phone'])
  }, [])

  return <div>ProductList</div>;
};

export default ProductList;
