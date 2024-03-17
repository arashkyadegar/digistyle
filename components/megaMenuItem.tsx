import React from "react";
import onClickOutside from "react-onclickoutside";
export default function MegaMenuItemComponent({ title1,title2,imageList,subMenuList1,subMenuList2 }: any) {
  return (
    <>
      <div className=" absolute right-0  w-full flex   flex-col bg-white h-96 text-black  ">
        <ul className="flex flex-row w-full ">
          <li className="w-full border border-gray-200 text-center">col</li>
          <li className="w-full border border-gray-200 text-center">col</li>
          <li className="w-full border border-gray-200 text-center">col</li>
          <li className="w-full border border-gray-200 text-center">col</li>
          <li className="w-full border border-gray-200 text-center">col</li>
          <li className="w-full border border-gray-200 text-center">col</li>
          <li className="w-full border border-gray-200 text-center">col</li>
        </ul>
        <div className="flex flex-row w-full p-8">
          <div className="w-full flex flex-col gap-2 border-l border-gray-200 p-5">
            <a className="font-semibold">{title1}</a>
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

          <div className="w-full flex flex-col  p-5">
            <a className="font-semibold">{title2}</a>
            <div className="grid grid-cols-2 gap-2 m-2">
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
    </>
  );
}
