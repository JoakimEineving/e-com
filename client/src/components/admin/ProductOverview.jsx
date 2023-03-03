import React from "react";
import useProduct from "../../hooks/useProduct";

const ProductOverview = () => {
    const [products, handleDelete] = useProduct();
    console.log(products);
  console.log(products);
  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold flex justify-center">
        Products Overview
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr className="hover " key={product._id}>
                <th>1</th>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p>No products found</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductOverview;
