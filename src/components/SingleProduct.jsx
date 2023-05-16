import img from "../assets/img/product-2.jpg";
const SingleProduct = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className=" lg:w-4/5 mx-auto flex">
          <img
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-md"
            src={img}
            alt="product image"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h3 className="text-sm text-gray-500 tracking-widest">
              brand name
            </h3>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              product name
            </h1>
            <div className="flex mb-4">
              <span>rating</span>
              <span>rating</span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div>
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 w-6 h-6 rounded-full focus:outline-none"></button>
                <button className="border-2 border-gray-300 w-6 h-6 rounded-full ml-1 bg-gray-700 focus:outline-none"></button>
                <button className="border-2 border-gray-300 w-6 h-6 rounded-full ml-1 bg-indigo-700 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className=" border border-gray-300 rounded  py-2 text-base pl-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500  ">
                    <option value="sm">SM</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="text-xl font-semibold tracking-widest">$15.49</p>
                <p>Qty. 01</p>
                <button className="btn">-</button>
                <button className="btn">+</button>
              </div>
              <div className="flex">
                <button className="btn btn-primary">Checkout</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
