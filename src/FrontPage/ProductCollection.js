import React, { useState, useEffect } from "react";
import ProductCard from "./Components/ProductCard";
import FooterComponent from "./Components/FooterComponent";
import ProductCollectionNav from "./Components/ProductCollectionNav";
import axios from "axios";
import CartCard from "./Components/CartCard";
import CartModal2 from "./Components/CartModal2";
import { Alert, Modal } from "antd";
import { PaystackButton } from "react-paystack";
import Lottie from "react-lottie-player";
import LottieItem from "../FrontPage/Assets/animation_lnlr30uq.json";

export default function ProductCollection() {
  const [data, setData] = useState([]);
  const [param, setParam] = useState();
  const [paramData, setParamData] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [filter, setFilter] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [loaded, setLoaded] = useState(false);
  const [alert, setAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const publicKey = "pk_test_b1f87dee23ad4a311ed6fefa1347f0e0ce925e37";

  const handleModalChanges = () => {
    setModalOpen(!modalOpen);
  };
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleFilter = () => {
    setFilter(!filter);
  };

  const onCancel = () => {
    setModalOpen(!modalOpen);
  };

  const SearchBooks = () => {
    axios
      .get("https://parseapi.back4app.com/classes/Books", {
        headers: {
          "X-Parse-Application-Id": "qi7EPlNyxhbkLy4Df91l5PtUgIQvviwT9eAgupbX",
          "X-Parse-REST-API-Key": "qCqCI6WnR6oB2Wq7w24IXnblkOby2JRQb4Q9TZww",
          "Content-Type": "application/json",
        },
        params: {
          where: JSON.stringify({
            [searchType]: param,
          }),
        },
      })
      .then((response) => {
        // Handle the response
        setData(response.data.results);
        console.log(response);
        setLoaded(true);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  const addToCart = (product) => {
    // Get the current cart items from localStorage.
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the cart items.
    cartItems.push(product);

    // Set the updated cart items back to localStorage.
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Update the cart state in the component.
    // This is optional, but it can be useful for displaying the updated cart to the user.
    setCartItems(cartItems);
    // Get the cart items from localStorage.

    // Count the number of items in the cart.
    const count = cartItems.length;

    // Set the item count in the component state.
    setCount(count);
    setTimeout(() => {
      setAlert(!alert);
    }, 1000);
  };

  const removeFromCart = (product) => {
    // Get the current cart items from localStorage.
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the index of the product to remove.
    const productIndex = cartItems.findIndex((item) => item.id === product.id);

    // If the product is in the cart, remove it.
    if (productIndex !== -1) {
      cartItems.splice(productIndex, 1);
    }

    // Set the updated cart items back to localStorage.
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Update the cart state in the component.
    // This is optional, but it can be useful for displaying the updated cart to the user.
    setCartItems(cartItems);
  };

  const calculateTotalPrice = () => {
    // Get the cart items from localStorage.
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Initialize the total price.
    let totalPrice = 0;

    var mainTotalPrice = parseInt(totalPrice);

    // Iterate over the cart items and add the price of each item to the total price.
    cartItems.forEach((item) => {
      const actualPrice = parseInt(item.price);
      mainTotalPrice += actualPrice;
    });

    // Return the total price.
    return mainTotalPrice;
  };

  const totalPrice = calculateTotalPrice();

  const CheckOut = () => {
    setShowForm(true);
  };

  const clearCart = () => {
    localStorage.clear("cart");
  };

  const payload = {
    order: JSON.parse(localStorage.getItem("cart")) || [],
    amount: totalPrice,
    name: name,
    email: email,
  };

  const componentProps = {
    email,
    amount: totalPrice * 100,
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      axios
        .post("https://parseapi.back4app.com/classes/bookOrder", payload, {
          headers: {
            "X-Parse-Application-Id":
              "qi7EPlNyxhbkLy4Df91l5PtUgIQvviwT9eAgupbX",
            "X-Parse-REST-API-Key": "qCqCI6WnR6oB2Wq7w24IXnblkOby2JRQb4Q9TZww",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.status === 201) {
            alert("Thanks for doing business with us! Come back soon!!");
            clearCart();
          } else {
            alert("Something went wrong. Please try again later.");
          }
        });
      // alert("Thanks for doing business with us! Come back soon!!");
      // clearCart();
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  useEffect(() => {
    // localStorage.setItem("cartItems", []);
    axios
      .get("https://parseapi.back4app.com/classes/Books", {
        headers: {
          "X-Parse-Application-Id": "qi7EPlNyxhbkLy4Df91l5PtUgIQvviwT9eAgupbX",
          "X-Parse-REST-API-Key": "qCqCI6WnR6oB2Wq7w24IXnblkOby2JRQb4Q9TZww",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle the response
        setData(response.data.results);
        setLoaded(true);
        console.log(data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);

  const filteredData = data.filter(
    ({ title, author, faculty, price }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(data);
  return (
    <div>
      {alert ? <Alert message="Success Text" type="success" /> : null}
      <ProductCollectionNav
        count={count}
        modalOpen={handleModalChanges}
        // addToCart={() => addToCart()}
      />
      <section>
        <div class="flex gap-x-4 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <label for="email-address" class="sr-only">
            Email address
          </label>
          <input
            id="Search"
            name="search"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            // autocomplete="search"
            required
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-grayDark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 capitalize"
            placeholder="Search By Book Title..."
          />
          <button
            // type="submit"
            onClick={() => {
              SearchBooks();
            }}
            class="flex-none rounded-md bg-absuColor2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-absuColor1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Search
          </button>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
              <button
                className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                onClick={handleFilter}>
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 rtl:rotate-180">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            {filter ? (
              <div>
                <select
                  className="h-10 rounded border-gray-300 pl-2 text-sm mt-3"
                  value={searchType}
                  onChange={handleSearchTypeChange}>
                  <option value="">Select Search Type</option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="Id">Book ID</option>
                </select>
              </div>
            ) : null}

            <div className="hidden sm:flex sm:gap-4">
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Availability </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4">
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              In Stock (5+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Pre Order (3+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Out of Stock (10+)
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Price </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          The highest price is $600
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4">
                          Reset
                        </button>
                      </header>

                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div className="hidden sm:block">
              <label htmlFor="SortBy" className="sr-only">
                SortBy
              </label>

              <select
                id="SortBy"
                value={searchType}
                onChange={handleSearchTypeChange}
                className="h-10 rounded border-gray-300 pl-2 text-sm">
                <option>Sort By</option>
                {/* <option value="">Select Search Type</option> */}
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="Id">Book ID</option>
              </select>
            </div>
          </div>

          {loaded ? (
            <div className="mt-4 grid gap-4 grid-cols-1 lg:grid-cols-4">
              {filteredData.map((book) => {
                return (
                  <ProductCard
                    author={book.author}
                    title={book.title}
                    image={book.cover_image.url}
                    faculty={book.faculty}
                    no={book.numberAvailable}
                    price={book.price}
                    onClick={() => addToCart(book)}
                  />
                );
              })}
            </div>
          ) : (
            <div className="d-flex items-center justify-center">
              <Lottie
                loop
                animationData={LottieItem}
                play
                style={{ width: 300, height: 300 }}
              />
            </div>
          )}
          {/* {cartItems.map((items) => {
            return (
              <CartCard
                key={items.objectId}
                img={items.cover_image.url}
                title={items.title}
                price={items.price}
                removeCart={() => removeFromCart(items)}
              />
            );
          })} */}

          <div>
            <Modal
              open={modalOpen}
              onCancel={onCancel}
              footer={[
                <div className="flex justify-between">
                  <button
                    onClick={clearCart}
                    className="font-semibold bg-absuColor1 text-textWhite p-3 rounded">
                    Clear Cart
                  </button>
                  {!showForm ? (
                    <button
                      className="font-semibold bg-yellowColor p-3 rounded text-absuColor2"
                      onClick={() => {
                        CheckOut();
                      }}>
                      Checkout
                    </button>
                  ) : null}
                </div>,
              ]}>
              <div className="pb-3">
                {!showForm ? (
                  <div>
                    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                      <h2 className="text-xl font-semibold">Your cart</h2>
                      {cartItems.map((res) => {
                        return (
                          <CartCard
                            key={res.objectId}
                            img={res.cover_image.url}
                            title={res.title}
                            price={res.price}
                            removeCart={() => removeFromCart(res)}
                          />
                        );
                      })}
                      {/* </div> */}
                    </div>
                    <div className="flex justify-between px-10">
                      <p className="font-bold text-xl">Total: </p>
                      <p className="font-semibold text-xl">NGN {totalPrice}</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* <div className="flex flex-row align-middle items-center"> */}
                        <img
                          className="w-auto h-16 "
                          src={require("./Assets/Abia_State_University_logo.svg.c7d43b43.png")}
                          alt=""
                        />
                        <label
                          className="font-semibold text-absuColor2 text-xl"
                          style={{ fontFamily: "Noto Serif Makasar" }}>
                          Abia State <br /> University
                        </label>
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <div className="space-y-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-greyDark shadow-sm ring-1 ring-inset ring-gretNormal placeholder:text-greyNormal focus:ring-2 focus:ring-inset focus:ring-Indigo sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium leading-6 text-greyDark">
                              Full Name
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              // autoComplete="current-password"
                              onChange={(e) => setName(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-greyDark shadow-sm ring-1 ring-inset ring-gretNormal placeholder:text-greyNormal focus:ring-2 focus:ring-inset focus:ring-Indigo sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <PaystackButton
                            className="paystack-button"
                            {...componentProps}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Modal>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
