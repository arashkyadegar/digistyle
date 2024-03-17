import React, { useEffect } from "react";
import myAppContext from "../context/context";

export default function MobileNavbarComponent() {
  const { navbarW, setNavbarW } = React.useContext(myAppContext);

  return (
    <>
      {/* hambergur-button */}
      <div
        className={
          navbarW
            ? "w-3/4 absolute bg-black flex sm:hidden text-gray-400  -top-5 transition-all "
            : "w-10 h-10 absolute  flex sm:hidden  -top-5  transition-all "
        }
      >
        <button
          onClick={() => {
            setNavbarW(!navbarW);
          }}
          data-collapse-toggle="navbar-sticky"
          type="button"
          className=" sm:hidden inline-flex transition-all duration-300 items-center ml-2 w-10 h-10 justify-center text-sm   rounded-lg outline-none   dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            navbarW
              ? "w-full flex flex-col bg-black sm:bg-transparent"
              : "w-0 overflow-hidden flex-col bg-black sm:bg-transparent"
          }
        >
          <div className=" sm:hidden flex  flex-row ">
            <div className="w-1/3 p-2 ">
              <a className="cursor-pointer text-xs p-2 flex justify-center text-center border border-gray-700">
                لطفا وارد شوید
              </a>
            </div>
            <div className="w-2/3  p-2 ">
              <div className="w-3/4 h-6 flex justify-center relative border border-black ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 right-0  absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  className="text-xs w-3/4 text-center outline-none  bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className=" w-full  justify-start   z-20 flex-col mt-5">
            <ul className="border-b border-gray-300 flex flex-col sm:flex-row s gap-6 text-sm justify-center p-2">
              {/* top menu lady  */}
              <li>
                <a
                  name-data="lady"
                  className="hover:font-semibold cursor-pointer"
                >
                  زنانه
                </a>
              </li>
              {/* top menu kid  */}
              <li className=" hover:font-semibold">
                <a href="#">بچگانه</a>
              </li>
              {/* top menu health  */}
              <li className=" hover:font-semibold">
                <a href="#">زیبایی و سلامت</a>
              </li>
              <li className="hidden sm:flex">
                <a>|</a>
              </li>
              {/* top menu discount  */}
              <li className="text-[#EF394E] hover:font-semibold">
                <a href="#">حراج استایل</a>
              </li>
              {/* top menu brand  */}
              <li className=" hover:font-semibold">
                <a href="#">برندها</a>
              </li>
              {/* top menu watch  */}
              <li className=" hover:font-semibold">
                <a href="#">خانه ساعت</a>
              </li>
              {/* top menu mode  */}
              <li className=" hover:font-semibold">
                <a href="#">مد پایدار</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full bg-black justify-center">
            <div className="w-full hidden  flex-col  border-l border-gray-200">
              <a className="font-semibold">برندهای لباس زنانه {">"}</a>
              <div className="flex flex-row">
                <ul className="w-full">
                  <li>ست</li>
                  <li>تیشرت</li>
                  <li>جین</li>
                  <li>بادی</li>
                </ul>
                <ul className="w-full">
                  <li>دامن</li>
                  <li>لباس زیر</li>
                  <li>بلوز</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center">
              <div className="w-full flex flex-col mx-auto p-6 gap-4">
                <div className="w-full overflow-hidden flex flex-col">
                  <a href="#">
                    <img
                      className="hover:scale-105 transition-all duration-700"
                      src="/images/d2f71589a8e3a93bfe65c78af1818ca17f032443_1702482979.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-full overflow-hidden flex flex-col">
                  <a href="#">
                    <img
                      className="hover:scale-105 transition-all duration-700"
                      src="/images/d2f71589a8e3a93bfe65c78af1818ca17f032443_1702482979.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="w-full overflow-hidden flex flex-col">
                  <a href="#">
                    <img
                      className="hover:scale-105 transition-all duration-700"
                      src="/images/d2f71589a8e3a93bfe65c78af1818ca17f032443_1702482979.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="w-full overflow-hidden flex flex-col">
                  <a href="#">
                    <img
                      className="hover:scale-105 transition-all duration-700"
                      src="/images/d2f71589a8e3a93bfe65c78af1818ca17f032443_1702482979.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
