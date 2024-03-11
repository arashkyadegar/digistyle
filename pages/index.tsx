import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container ">
        <div className="flex flex-row w-full mt-4 h-16">
          {/* basket */}
          <div className="w-1/4 flex gap-4 justify-center">
            <div className="relative">
              <div className="flex absolute -top-1 left-5 z-20 bg-pink-500 w-4 h-4 rounded-full justify-center items-center text-white">
                ۰
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 z-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <div className="text-xs p-1 flex">
              <a>وارد شوید</a>
            </div>
          </div>
          {/* digistyle */}
          <div className="w-2/4 flex justify-center border-b border-black mx-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="207"
              height="34"
              viewBox="0 0 252 40"
            >
              <path
                fill-rule="evenodd"
                d="M87.064 20.007v-2.3H67.108v4.6h15.341c-1.096 7.429-7.56 13.187-15.344 13.187-8.552 0-15.509-6.947-15.509-15.487S58.553 4.519 67.105 4.519c5.011 0 9.74 2.44 12.648 6.524l3.677-2.61C79.677 3.161 73.574.014 67.105.014c-11.04 0-20.02 8.968-20.02 19.993C47.085 31.03 56.065 40 67.105 40c11.038 0 20.018-8.969 19.96-19.993zm116.67 15.003V.624h-4.385V39.39h23.904v-4.38h-19.518zM192.272.624l-12.197 19.694L167.877.624h-5.16l15.14 24.446v14.32h4.387V25.147L197.432.624h-5.16zM126.838 36.65c2.438-2.062 3.726-5.085 3.726-8.738 0-3.717-1.506-6.531-4.474-8.366-2.425-1.5-5.855-2.368-10.795-2.734-8.999-.832-9-4.64-9-5.893 0-3.957 3.462-6.514 8.819-6.514 5.429 0 9.524 2.801 9.524 6.514h4.41C129.048 4.694 123.057 0 115.114 0c-7.789 0-13.228 4.49-13.228 10.918 0 3.069 1.305 5.626 3.776 7.395 2.165 1.55 5.277 2.521 9.25 2.885l.039.004c10.337.761 11.204 3.863 11.204 6.709 0 1.874 0 7.579-10.42 7.579-6.5 0-11.041-3.35-11.041-8.146h-4.41c0 7.271 6.498 12.55 15.451 12.55 4.825 0 8.56-1.092 11.103-3.245zM252 4.785V.625h-24.36v38.764H252v-4.38h-19.975V22.192h16.01v-4.38h-16.01V4.784H252zM160.673.602h-30.076v4.38h12.844V39.4h4.386V4.982h12.846V.602zM91.451 39.39h4.386V.624H91.45V39.39zm-53.174 0h4.386V.624h-4.386V39.39zM0 39.39V.623h14.448c10.586 0 19.22 8.507 19.406 19.034.193 10.883-8.774 19.731-19.672 19.731H0zm4.386-4.38h9.827c8.25 0 15.141-6.544 15.26-14.782.122-8.373-6.663-15.224-15.02-15.224H4.386V35.01z"
              />
            </svg>
          </div>
          {/* search */}
          <div className="w-1/4 h-8 flex justify-center relative border-b border-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 right-0 absolute"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              className="text-xs w-full text-center outline-none mb-2"
              value="جستجوی محصولات از ۲۵۴۰ برند"
            />
          </div>
        </div>
        <div className="flex  justify-center mt-4">
          <ul className="flex flex-row gap-6 text-sm">
            <li className=" hover:font-semibold ">
              <a href="#">زنانه</a>
            </li>
            <li className=" hover:font-semibold">
              <a href="#">مردانه</a>
            </li>
            <li className=" hover:font-semibold">
              <a href="#">بچگانه</a>
            </li>
            <li className=" hover:font-semibold">
              <a href="#">زیبایی و سلامت</a>
            </li>
            <li className="">
              <a>|</a>
            </li>
            <li className="text-[#EF394E] hover:font-semibold">
              <a href="#">حراج استایل</a>
            </li>
            <li className=" hover:font-semibold">
              <a href="#">برندها</a>
            </li>
            <li className=" hover:font-semibold">
              <a href="#">خانه ساعت</a>
            </li>
            <li className=" hover:font-semibold">
              <a href="#">مد پایدار</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 mt-10">
        <img src="/images/f33d3c7a.jpg" alt="" />
      </div>

      <div className="p-4 flex flex-col gap-4 sm:flex-row  h-[480px]">

      <div className="w-full flex flex-col">
          <div className="w-full h-[400px]   overflow-hidden ">
            <div className=" p-1 mb-2 h-8 flex flex-row justify-between text-[#F04D7D]">
              <a className="font-semibold text-base">پیشنهاد شگفت انگیز</a>
              <a className="text-base">۲۴:۱۲:۰۰</a>
            </div>
            <div className="w-full flex flex-col bg-white duration-300 transition-all hover:h-72 h-96 ">
              <div className="relative h-full flex flex-col bg-gray-100">
                <div className="flex flex-row justify-start">
                  <div className="absolute  w-14 h-8 bg-white text-center">
                    <a href="#">نوت</a>
                  </div>
                </div>

                <img
                  style={{ mixBlendMode: "multiply" }}
                  className="bg-transparent aspect-square"
                  src="/images/655df9ea67d36cbbcec2e0ff43b81c018cdfd40c_1654458974.jpg"
                />
              </div>
              <div className="flex flex-row justify-end  bg-gray-100">
                <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                  <a href="#">۲۳ ٪</a>
                </div>
              </div>
              <div className="bg-white z-50 w-full ">
                <div className="z-50  bg-white flex flex-row gap-4  justify-right py-2 pr-4">
                  <div className="w-4 h-4 z-50 bg-black"></div>
                  <div className="w-4 h-4 z-50 bg-green-700"></div>
                  <div className="w-4 h-4 z-50 bg-blue-600"></div>
                  <div className="w-4 h-4 z-50 bg-pink-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div>asdasd</div>
        </div> 

        <div className="w-full flex flex-col">
          <div className="w-full h-[400px]   overflow-hidden ">
            <div className=" p-1 mb-2 h-8 flex flex-row justify-between text-[#F04D7D]">
              <a className="font-semibold text-base">پیشنهاد شگفت انگیز</a>
              <a className="text-base">۲۴:۱۲:۰۰</a>
            </div>
            <div className="w-full flex flex-col bg-white duration-300 transition-all hover:h-72 h-96 ">
              <div className="relative h-full flex flex-col bg-gray-100">
                <div className="flex flex-row justify-start">
                  <div className="absolute  w-14 h-8 bg-white text-center">
                    <a href="#">نوت</a>
                  </div>
                </div>

                <img
                  style={{ mixBlendMode: "multiply" }}
                  className="bg-transparent aspect-square"
                  src="/images/655df9ea67d36cbbcec2e0ff43b81c018cdfd40c_1654458974.jpg"
                />
              </div>
              <div className="flex flex-row justify-end  bg-gray-100">
                <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                  <a href="#">۲۳ ٪</a>
                </div>
              </div>
              <div className="bg-white z-50 w-full ">
                <div className="z-50  bg-white flex flex-row gap-4  justify-right py-2 pr-4">
                  <div className="w-4 h-4 z-50 bg-black"></div>
                  <div className="w-4 h-4 z-50 bg-green-700"></div>
                  <div className="w-4 h-4 z-50 bg-blue-600"></div>
                  <div className="w-4 h-4 z-50 bg-pink-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div>asdasd</div>
        </div> 


        <div className="w-full flex flex-col ">
          <div className="w-full h-[400px]   overflow-hidden ">
            <div className=" p-1 mb-2 h-8 flex flex-row justify-between text-[#F04D7D]">
              <a className="font-semibold text-base">پیشنهاد شگفت انگیز</a>
              <a className="text-base">۲۴:۱۲:۰۰</a>
            </div>
            <div className="w-full flex flex-col bg-white duration-300 transition-all hover:h-72 h-96 ">
              <div className="relative h-full flex flex-col bg-gray-100">
                <div className="flex flex-row justify-start">
                  <div className="absolute  w-14 h-8 bg-white text-center">
                    <a href="#">نوت</a>
                  </div>
                </div>

                <img
                  style={{ mixBlendMode: "multiply" }}
                  className="bg-transparent aspect-square"
                  src="/images/655df9ea67d36cbbcec2e0ff43b81c018cdfd40c_1654458974.jpg"
                />
              </div>
              <div className="flex flex-row justify-end  bg-gray-100">
                <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                  <a href="#">۲۳ ٪</a>
                </div>
              </div>
              <div className="bg-white z-50 w-full ">
                <div className="z-50  bg-white flex flex-row gap-4  justify-right py-2 pr-4">
                  <div className="w-4 h-4 z-50 bg-black"></div>
                  <div className="w-4 h-4 z-50 bg-green-700"></div>
                  <div className="w-4 h-4 z-50 bg-blue-600"></div>
                  <div className="w-4 h-4 z-50 bg-pink-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div>asdasd</div>
        </div> 
      </div>
    </>
  );
}
