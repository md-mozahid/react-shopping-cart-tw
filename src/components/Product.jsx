import { Fragment, useState } from "react";
import { ProductList } from "../products/ProductList";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState(ProductList);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            const { id, name, price, category, image } = product;
            return (
              <Fragment key={id}>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      className="object-cover object-center w-full block"
                      src={image}
                      alt="product image"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {name}
                    </h2>
                    <p className="mt-1">{price}</p>
                  </div>
                  <button className="btn btn-primary w-full">
                    Add to cart
                  </button>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
