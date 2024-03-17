import React from "react";
import myAppContext from "../context/context";
export default function LabtopNavbarComponent() {
  const { navbarShow, setNavbarShow } = React.useContext(myAppContext);
  const toggleNavbar = () => {
    setNavbarShow(!navbarShow);
  };
  return (
    <>
      <div className="sm:flex mt-5 hidden w-full bg-transparent">
        <div className="w-full flex flex-col  bg-transparent">
          <div className=" w-full   justify-start   text-black z-20 flex-col ">
            <ul className=" flex flex-col sm:flex-row s gap-6 text-sm justify-center p-2">
              {/* top menu lady  */}
              <li>
                <a
                  onClick={toggleNavbar}
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
          {navbarShow && (
            <div className="flex flex-row w-full  bg-white  shadow-lg shadow-gray-600">
              <div className="w-full flex flex-col gap-2 p-2 border-l border-gray-200">
                <a className="font-semibold">برندهای لباس زنانه</a>
                <div className="flex flex-row w-1/2  mx-auto">
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
              <div className="w-full flex flex-col-re  p-2 justify-center">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-2 ">
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
          )}
        </div>
      </div>
    </>
  );
}
