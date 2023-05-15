import img from '../assets/img/product-1.jpg'

const Product = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-48 block"
                src={img}
                alt="product image"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Category
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Product name
              </h2>
              <p className="mt-1">$15.49</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-48 block"
                src={img}
                alt="product image"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Category
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Product name
              </h2>
              <p className="mt-1">$15.49</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-48 block"
                src={img}
                alt="product image"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Category
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Product name
              </h2>
              <p className="mt-1">$15.49</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-48 block"
                src={img}
                alt="product image"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Category
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Product name
              </h2>
              <p className="mt-1">$15.49</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-48 block"
                src={img}
                alt="product image"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Category
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Product name
              </h2>
              <p className="mt-1">$15.49</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
