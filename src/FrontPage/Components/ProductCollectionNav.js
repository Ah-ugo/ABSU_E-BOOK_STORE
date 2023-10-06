import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import CartModalComponent from "./CartModalComponent";
import CartModal2 from "./CartModal2";

export default function ProductCollectionNav(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const countItemsInCart = () => {
    // Get the cart items from localStorage.
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the cart items array is empty.
    if (cartItems.length === 0) {
      return 0;
    }

    // Initialize the count of items.
    let count = 0;

    // Iterate over the cart items and count the number of items.
    cartItems.forEach((item) => {
      count += item.quantity;
    });

    // Return the count of items.
    return count;
  };

  // const count = countItemsInCart();

  return (
    <div>
      <header className="bg-white">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600 no-underline" href="/">
                <span className="sr-only">Home</span>
                <div className="flex flex-row align-middle items-center">
                  <img
                    className="w-auto h-16 "
                    src={require("../Assets/Abia_State_University_logo.svg.c7d43b43.png")}
                    alt=""
                  />
                  <label
                    className="font-semibold text-absuColor2 text-xl"
                    style={{ fontFamily: "Noto Serif Makasar" }}>
                    Abia State <br /> University
                  </label>
                </div>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                      href="/">
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                      href="/">
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                      href="/">
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                      href="/">
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                      href="/">
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                      href="/">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              <div className="sm:flex">
                <a
                  className="py-2.5 text-sm font-medium text-grayDark mx-9 flex no-underline"
                  onClick={props.modalOpen}>
                  <p>{props.count}</p>

                  <AiOutlineShoppingCart className="font-semibold text-2xl" />
                </a>
                {/* <CartModal2
                  modalOpen={modalOpen}
                  onCancel={() => {
                    setModalOpen(false);
                  }}
                /> */}

                {/* <div className="sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/">
                    Register
                  </a>
                </div> */}
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleNav}>
                  {!isNavOpen ? (
                    <HiBars3 className="font-bold text-2xl" />
                  ) : (
                    <HiOutlineXMark className="font-bold text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <nav className="bg-white">
          <ul className="flex flex-col items-center gap-6 text-sm">
            <li>
              <a
                className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                href="/">
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                href="/">
                Careers
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                href="/">
                History
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                href="/">
                Services
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                href="/">
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition no-underline text-grayDark hover:text-gray-500/75"
                href="/">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
