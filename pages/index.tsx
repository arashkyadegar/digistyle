import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import myAppContext from "@/components/context/context";
import MobileNavbarComponent from "@/components/common/mobileNavbar";
import LabtopNavbarComponent from "@/components/common/labtopNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // function toggleTopMeu(event: any) {
  //   setTopMenu(true);
  // }
  function clickme(event: any) {
    const node = event.target as HTMLElement;
    const nameData = node.getAttribute("name-data");
    // if (nameData != "lady") setTopMenu(false);
  }
  return (
    <>
      
      <div className="flex flex-col  gap-10  w-full h-[520px] min-h-96">
        <div className="flex flex-col w-full relative">
          {/* first nav bar */}
          <div className=" absolute w-full text-black z-20 flex flex-col  mt-5">
            <div className=" flex-row px-4 flex">
              {/* basket */}
              <div className="w-3/4  gap-2 justify-center hidden sm:flex">
                <div className="relative">
                  <div className="flex absolute -top-1 left-5 z-20 bg-pink-500 w-4 h-4 rounded-full justify-center items-center text-white">
                    ۰
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 z-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <div className="text-xs p-1 flex">
                  <a>وارد شوید</a>
                </div>
              </div>
              {/* digistyle */}
              <div className="w-full sm:mt-5 -m-3 flex justify-center  mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="207"
                  height="34"
                  viewBox="0 0 252 40"
                >
                  <path
                    fillRule="evenodd"
                    d="M87.064 20.007v-2.3H67.108v4.6h15.341c-1.096 7.429-7.56 13.187-15.344 13.187-8.552 0-15.509-6.947-15.509-15.487S58.553 4.519 67.105 4.519c5.011 0 9.74 2.44 12.648 6.524l3.677-2.61C79.677 3.161 73.574.014 67.105.014c-11.04 0-20.02 8.968-20.02 19.993C47.085 31.03 56.065 40 67.105 40c11.038 0 20.018-8.969 19.96-19.993zm116.67 15.003V.624h-4.385V39.39h23.904v-4.38h-19.518zM192.272.624l-12.197 19.694L167.877.624h-5.16l15.14 24.446v14.32h4.387V25.147L197.432.624h-5.16zM126.838 36.65c2.438-2.062 3.726-5.085 3.726-8.738 0-3.717-1.506-6.531-4.474-8.366-2.425-1.5-5.855-2.368-10.795-2.734-8.999-.832-9-4.64-9-5.893 0-3.957 3.462-6.514 8.819-6.514 5.429 0 9.524 2.801 9.524 6.514h4.41C129.048 4.694 123.057 0 115.114 0c-7.789 0-13.228 4.49-13.228 10.918 0 3.069 1.305 5.626 3.776 7.395 2.165 1.55 5.277 2.521 9.25 2.885l.039.004c10.337.761 11.204 3.863 11.204 6.709 0 1.874 0 7.579-10.42 7.579-6.5 0-11.041-3.35-11.041-8.146h-4.41c0 7.271 6.498 12.55 15.451 12.55 4.825 0 8.56-1.092 11.103-3.245zM252 4.785V.625h-24.36v38.764H252v-4.38h-19.975V22.192h16.01v-4.38h-16.01V4.784H252zM160.673.602h-30.076v4.38h12.844V39.4h4.386V4.982h12.846V.602zM91.451 39.39h4.386V.624H91.45V39.39zm-53.174 0h4.386V.624h-4.386V39.39zM0 39.39V.623h14.448c10.586 0 19.22 8.507 19.406 19.034.193 10.883-8.774 19.731-19.672 19.731H0zm4.386-4.38h9.827c8.25 0 15.141-6.544 15.26-14.782.122-8.373-6.663-15.224-15.02-15.224H4.386V35.01z"
                  />
                </svg>
              </div>
              {/* search */}
              <div className="hidden sm:flex w-3/4 h-8  justify-center relative border-b border-black ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 right-0 absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  className="text-xs w-3/4 text-center outline-none mb-2 bg-transparent"
                  value="جستجوی محصولات از ۲۵۴۰ برند"
                />
              </div>
            </div>
            <MobileNavbarComponent />
            <LabtopNavbarComponent />
          </div>
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              FreeMode,
            ]}
            className="absolute top-0 z-10 w-full h-[500px] min-h-96"
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            navigation={true}
            // onSlideChange={() => console.log("slide change")}
            // onNavigationNext={() => {}}
            // onNavigationPrev={() => {}}
            // onSwiper={(swiper) => {}}
          >
            <SwiperSlide>
              <img
                className="w-full aspect-auto  h-[500px] "
                src="/images/589fb1bb1f1023def36f197dff6a009f8d38bb42_1709971308.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full aspect-auto h-[500px] "
                src="/images/e8b60b1181ac9806eb45ecaac4a3da156753a598_1709971899.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full aspect-auto h-[500px] "
                src="/images/c829a27e66368563caa03053b6f0b2222831ea91_1709971580.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse  sm:flex-row px-2   bg-[#E9E9E9]">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            FreeMode,
          ]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          // slidesPerView={4}
          navigation={true}
          // onSlideChange={() => console.log("slide change")}
          // onNavigationNext={() => {}}
          // onNavigationPrev={() => {}}
          // onSwiper={(swiper) => console.log(swiper)}
          className="flex flex-row  w-full  "
        >
          <SwiperSlide>
            <div className="w-full  h-[320px] flex flex-col">
              <div className="w-full h-[320px]   overflow-hidden ">
                <div className="w-full flex flex-col bg-white h-80 ">
                  <div className="relative h-full flex flex-col bg-gray-100">
                    <div className="flex flex-row justify-start">
                      <div className="absolute  w-24 h-8 bg-white text-center">
                        <a href="#">نایس پاپت</a>
                      </div>
                    </div>

                    <img
                      style={{ mixBlendMode: "multiply" }}
                      className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                      src="/images/119218888.jpg"
                    />
                  </div>
                  <div className="flex flex-row justify-end  bg-gray-100">
                    <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                      <a href="#">۲۳ ٪</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <a className="text-sm w-full  my-4 text-black">
                  دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
                </a>
                <div className="flex flex-row justify-end gap-2">
                  <a className="line-through ">۵۰۰۰۰</a>
                  <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[320px] flex flex-col">
              <div className="w-full h-[320px]   overflow-hidden ">
                <div className="w-full flex flex-col bg-white h-80 ">
                  <div className="relative h-full flex flex-col bg-gray-100">
                    <div className="flex flex-row justify-start">
                      <div className="absolute  w-24 h-8 bg-white text-center">
                        <a href="#">نایس پاپت</a>
                      </div>
                    </div>

                    <img
                      style={{ mixBlendMode: "multiply" }}
                      className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                      src="/images/119218888.jpg"
                    />
                  </div>
                  <div className="flex flex-row justify-end  bg-gray-100">
                    <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                      <a href="#">۲۳ ٪</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <a className="text-sm w-full  my-4 text-black">
                  دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
                </a>
                <div className="flex flex-row justify-end gap-2">
                  <a className="line-through ">۵۰۰۰۰</a>
                  <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[320px] flex flex-col">
              <div className="w-full h-[320px]   overflow-hidden ">
                <div className="w-full flex flex-col bg-white h-80 ">
                  <div className="relative h-full flex flex-col bg-gray-100">
                    <div className="flex flex-row justify-start">
                      <div className="absolute  w-24 h-8 bg-white text-center">
                        <a href="#">نایس پاپت</a>
                      </div>
                    </div>

                    <img
                      style={{ mixBlendMode: "multiply" }}
                      className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                      src="/images/119218888.jpg"
                    />
                  </div>
                  <div className="flex flex-row justify-end  bg-gray-100">
                    <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                      <a href="#">۲۳ ٪</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <a className="text-sm w-full  my-4 text-black">
                  دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
                </a>
                <div className="flex flex-row justify-end gap-2">
                  <a className="line-through ">۵۰۰۰۰</a>
                  <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[320px] flex flex-col">
              <div className="w-full h-[320px]   overflow-hidden ">
                <div className="w-full flex flex-col bg-white h-80 ">
                  <div className="relative h-full flex flex-col bg-gray-100">
                    <div className="flex flex-row justify-start">
                      <div className="absolute  w-24 h-8 bg-white text-center">
                        <a href="#">نایس پاپت</a>
                      </div>
                    </div>

                    <img
                      style={{ mixBlendMode: "multiply" }}
                      className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                      src="/images/119218888.jpg"
                    />
                  </div>
                  <div className="flex flex-row justify-end  bg-gray-100">
                    <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                      <a href="#">۲۳ ٪</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <a className="text-sm w-full  my-4 text-black">
                  دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
                </a>
                <div className="flex flex-row justify-end gap-2">
                  <a className="line-through ">۵۰۰۰۰</a>
                  <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[320px] flex flex-col">
              <div className="w-full h-[320px]   overflow-hidden ">
                <div className="w-full flex flex-col bg-white h-80 ">
                  <div className="relative h-full flex flex-col bg-gray-100">
                    <div className="flex flex-row justify-start">
                      <div className="absolute  w-24 h-8 bg-white text-center">
                        <a href="#">نایس پاپت</a>
                      </div>
                    </div>

                    <img
                      style={{ mixBlendMode: "multiply" }}
                      className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                      src="/images/119218888.jpg"
                    />
                  </div>
                  <div className="flex flex-row justify-end  bg-gray-100">
                    <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                      <a href="#">۲۳ ٪</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <a className="text-sm w-full  my-4 text-black">
                  دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
                </a>
                <div className="flex flex-row justify-end gap-2">
                  <a className="line-through ">۵۰۰۰۰</a>
                  <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[320px] flex flex-col">
              <div className="w-full h-[320px]   overflow-hidden ">
                <div className="w-full flex flex-col bg-white h-80 ">
                  <div className="relative h-full flex flex-col bg-gray-100">
                    <div className="flex flex-row justify-start">
                      <div className="absolute  w-24 h-8 bg-white text-center">
                        <a href="#">نایس پاپت</a>
                      </div>
                    </div>

                    <img
                      style={{ mixBlendMode: "multiply" }}
                      className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                      src="/images/119218888.jpg"
                    />
                  </div>
                  <div className="flex flex-row justify-end  bg-gray-100">
                    <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                      <a href="#">۲۳ ٪</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <a className="text-sm w-full  my-4 text-black">
                  دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
                </a>
                <div className="flex flex-row justify-end gap-2">
                  <a className="line-through ">۵۰۰۰۰</a>
                  <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-full sm:my-20 sm:w-1/5 flex sm:flex-row px-4 justify-center sm:justify-start sm:items-start">
          <div className="  w-full flex flex-row  sm:flex-col justify-center items-center gap-4">
            <div>
              <img src="/images/100014194.png" className="w-16 h-16 mx-auto" />
            </div>
            <div className="flex gap-1  flex-col  text-black">
              <a className="text-sm  " href="#">
                مشاهده همه
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* big image */}
      <div className="flex flex-row w-full  px-10">
        <img src="/images/f33d3c7a.jpg" alt="" />
      </div>
      {/* amazing discounts offer */}
      <div className=" grid gap-4 grid-cols-2 sm:grid-cols-3 w-full  px-10">
        <div className="w-full flex flex-col">
          <div className="w-full h-[320px]   overflow-hidden ">
            <div className=" p-1 mb-2 h-8 flex flex-row justify-between text-[#F04D7D]">
              <a className="font-semibold text-base">پیشنهاد شگفت انگیز</a>
              <a className="text-base">۲۴:۱۲:۰۰</a>
            </div>
            <div className="w-full flex flex-col bg-white duration-300 transition-all hover:h-52 h-60 min-h-52">
              <div className="relative h-full flex flex-col bg-gray-100">
                <div className="flex flex-row justify-start">
                  <div className="absolute  w-14 h-8 bg-white text-center">
                    <a href="#" className="font-semibold">
                      نوت
                    </a>
                  </div>
                </div>

                <img
                  style={{ mixBlendMode: "multiply" }}
                  className="bg-transparent min-w-72"
                  src="/images/119218888.jpg"
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
          <div className="flex flex-col">
            <a className="text-sm w-full  my-4 text-black">
              دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
            </a>
            <div className="flex flex-row justify-end gap-2">
              <a className="line-through ">۵۰۰۰۰</a>
              <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="w-full h-[320px]   overflow-hidden ">
            <div className=" p-1 mb-2 h-8 flex flex-row justify-between text-[#F04D7D]">
              <a className="font-semibold text-base">پیشنهاد شگفت انگیز</a>
              <a className="text-base">۲۴:۱۲:۰۰</a>
            </div>
            <div className="w-full flex flex-col bg-white duration-300 transition-all hover:h-52 h-60 min-h-52">
              <div className="relative h-full flex flex-col bg-gray-100">
                <div className="flex flex-row justify-start">
                  <div className="absolute  w-14 h-8 bg-white text-center">
                    <a href="#" className="font-semibold">
                      نوت
                    </a>
                  </div>
                </div>

                <img
                  style={{ mixBlendMode: "multiply" }}
                  className="bg-transparent min-w-72"
                  src="/images/119218888.jpg"
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
          <div className="flex flex-col">
            <a className="text-sm w-full  my-4 text-black">
              دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
            </a>
            <div className="flex flex-row justify-end gap-2">
              <a className="line-through ">۵۰۰۰۰</a>
              <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="w-full h-[320px]   overflow-hidden ">
            <div className=" p-1 mb-2 h-8 flex flex-row justify-between text-[#F04D7D]">
              <a className="font-semibold text-base">پیشنهاد شگفت انگیز</a>
              <a className="text-base">۲۴:۱۲:۰۰</a>
            </div>
            <div className="w-full flex flex-col bg-white duration-300 transition-all hover:h-52 h-60 min-h-52">
              <div className="relative h-full flex flex-col bg-gray-100">
                <div className="flex flex-row justify-start">
                  <div className="absolute  w-14 h-8 bg-white text-center">
                    <a href="#" className="font-semibold">
                      نوت
                    </a>
                  </div>
                </div>

                <img
                  style={{ mixBlendMode: "multiply" }}
                  className="bg-transparent min-w-72"
                  src="/images/119218888.jpg"
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
          <div className="flex flex-col">
            <a className="text-sm w-full  my-4 text-black">
              دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
            </a>
            <div className="flex flex-row justify-end gap-2">
              <a className="line-through ">۵۰۰۰۰</a>
              <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
            </div>
          </div>
        </div>
      </div>
      {/* men's kids ladies's menu */}
      <div className=" bg-[#F5F5F5] flex flex-col px-10 py-4 my-4">
        <div className="flex flex-row w-full ">
          <ul className="flex flex-row w-full px-10 text-2xl border-b-2 border-white">
            <li className=" w-1/5 sm:text-xl text-base text-center border-b border-gray p-2  ">
              مردانه
            </li>
            <li className="w-1/5  sm:text-xl text-base text-center">زنانه</li>
            <li className="w-1/5 sm:text-xl text-base text-center">بچگانه</li>
            <li className=" w-2/5  sm:text-xl text-base text-center">
              زیبایی و سلامت
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-10 relative ">
          <div className="overflow-hidden">
            <img
              className="hover:scale-105 transition-all duration-700"
              src="/images/8e668efb94b74b2158608d4a0c4a0080d1bbdd53_1687585960.jpg"
            />
          </div>
          <div className="flex flex-col justify-end">
            <div className="absolute flex justify-center items-center px-2 w-30 h-11 bg-white text-center">
              <a href="#" className="text-xl">
                لباس مردانه
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-8 ">
            <div className="w-full overflow-hidden">
              <img
                className="hover:scale-105 transition-all duration-700"
                src="/images/e3af4ce95e16f0b3d8bdcdb768e6e2a2c530d950_1687586011.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end">
                <div className="absolute flex justify-center items-center px-2 w-30 h-11 bg-white text-center">
                  <a href="#" className="text-xl">
                    لباس مردانه
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <img
                className="hover:scale-105 transition-all duration-700"
                src="/images/0714b4413a9865a2ed09baef3acfafdc4d861eaf_1687585978.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end">
                <div className="absolute flex justify-center items-center px-2 w-30 h-11 bg-white text-center">
                  <a href="#" className="text-xl">
                    لباس مردانه
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <img
                className="hover:scale-105 transition-all duration-700"
                src="/images/8acdcd233b562f62996fc31a724ff3474b33672e_1687585993.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end">
                <div className="absolute flex justify-center items-center px-2 w-30 h-11 bg-white text-center">
                  <a href="#" className="text-xl">
                    لباس مردانه
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* best brands */}
      <div className="my-4 flex flex-row justify-between px-10">
        <div>
          <a className="text-2xl">محــبوبــــ‌ترینــ بــرنــدها</a>
        </div>
        <div className="flex flex-row gap-3">
          <a className="text-xl" href="#">
            مشاهده همه برندها
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
      </div>

      <div className="w-full flex flex-col  sm:flex-row px-2  bg-[#E9E9E9]">
        <div className="w-full sm:w-1/5 flex sm:flex-row px-4 justify-center sm:justify-start sm:items-start">
          <div className=" w-full sm:my-20 flex flex-row  sm:flex-col justify-center items-center gap-4">
            <div>
              <img src="/images/100014194.png" className="w-16 h-16 mx-auto" />
            </div>
            <div className="flex flex-col gap-1  text-black">
              <a className="text-sm " href="#">
                مشاهده همه
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4  w-full sm:w-4/5 p-2">
          <div className="w-full h-[320px] flex flex-col">
            <div className="w-full h-[320px]   overflow-hidden ">
              <div className="w-full flex flex-col bg-white h-80 ">
                <div className="relative h-full flex flex-col bg-gray-100">
                  <div className="flex flex-row justify-start">
                    <div className="absolute  w-24 h-8 bg-white text-center">
                      <a href="#">نایس پاپت</a>
                    </div>
                  </div>

                  <img
                    style={{ mixBlendMode: "multiply" }}
                    className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                    src="/images/119218888.jpg"
                  />
                </div>
                <div className="flex flex-row justify-end  bg-gray-100">
                  <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                    <a href="#">۲۳ ٪</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <a className="text-sm w-full  my-4 text-black">
                دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
              </a>
              <div className="flex flex-row justify-end gap-2">
                <a className="line-through ">۵۰۰۰۰</a>
                <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
              </div>
            </div>
          </div>

          <div className="w-full h-[320px]  flex flex-col">
            <div className="w-full h-[320px]   overflow-hidden ">
              <div className="w-full flex flex-col bg-white h-80 ">
                <div className="relative h-full flex flex-col bg-gray-100">
                  <div className="flex flex-row justify-start">
                    <div className="absolute  w-24 h-8 bg-white text-center">
                      <a href="#">نایس پاپت</a>
                    </div>
                  </div>

                  <img
                    style={{ mixBlendMode: "multiply" }}
                    className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                    src="/images/119218888.jpg"
                  />
                </div>
                <div className="flex flex-row justify-end  bg-gray-100">
                  <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                    <a href="#">۲۳ ٪</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <a className="text-sm w-full  my-4 text-black">
                دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
              </a>
              <div className="flex flex-row justify-end gap-2">
                <a className="line-through ">۵۰۰۰۰</a>
                <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
              </div>
            </div>
          </div>

          <div className="w-full h-[320px]   flex flex-col">
            <div className="w-full h-[320px]   overflow-hidden ">
              <div className="w-full flex flex-col bg-white h-80 ">
                <div className="relative h-full flex flex-col bg-gray-100">
                  <div className="flex flex-row justify-start">
                    <div className="absolute  w-24 h-8 bg-white text-center">
                      <a href="#">نایس پاپت</a>
                    </div>
                  </div>

                  <img
                    style={{ mixBlendMode: "multiply" }}
                    className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                    src="/images/119218888.jpg"
                  />
                </div>
                <div className="flex flex-row justify-end  bg-gray-100">
                  <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                    <a href="#">۲۳ ٪</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <a className="text-sm w-full  my-4 text-black">
                دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
              </a>
              <div className="flex flex-row justify-end gap-2">
                <a className="line-through ">۵۰۰۰۰</a>
                <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-between px-10 my-4">
        <div className="mb-4">
          <a className="text-2xl">زیبـــایــی‌ و‌ ســـلـامــت</a>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="w-full">
            <a href="#">
              <img
                src="/images/7d207dc074c270ea14364d1e24f07faeefad5ec4_1672674816.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="w-full">
            <a href="#">
              <img
                src="/images/7054d43885c758e1c8387cd303d7a50cc6e9288c_1672674876.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="w-full">
            <a href="#">
              <img
                src="/images/a5c9b9d8a7d8992f19f40d6c19660e034760fe09_1672675071.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="w-full">
            <a href="#">
              <img
                src="/images/cce8e40bbd7f16d1c4d222f312be7433ded750ac_1672674985.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse  sm:flex-row px-2  bg-[#E9E9E9]">
        <div className="grid grid-cols-3 gap-4  w-full sm:w-4/5 p-2">
          <div className="w-full h-[320px] flex flex-col">
            <div className="w-full h-[320px]   overflow-hidden ">
              <div className="w-full flex flex-col bg-white h-80 ">
                <div className="relative h-full flex flex-col bg-gray-100">
                  <div className="flex flex-row justify-start">
                    <div className="absolute  w-24 h-8 bg-white text-center">
                      <a href="#">نایس پاپت</a>
                    </div>
                  </div>

                  <img
                    style={{ mixBlendMode: "multiply" }}
                    className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                    src="/images/119218888.jpg"
                  />
                </div>
                <div className="flex flex-row justify-end  bg-gray-100">
                  <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                    <a href="#">۲۳ ٪</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <a className="text-sm w-full  my-4 text-black">
                دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
              </a>
              <div className="flex flex-row justify-end gap-2">
                <a className="line-through ">۵۰۰۰۰</a>
                <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
              </div>
            </div>
          </div>

          <div className="w-full h-[320px]  flex flex-col">
            <div className="w-full h-[320px]   overflow-hidden ">
              <div className="w-full flex flex-col bg-white h-80 ">
                <div className="relative h-full flex flex-col bg-gray-100">
                  <div className="flex flex-row justify-start">
                    <div className="absolute  w-24 h-8 bg-white text-center">
                      <a href="#">نایس پاپت</a>
                    </div>
                  </div>

                  <img
                    style={{ mixBlendMode: "multiply" }}
                    className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                    src="/images/119218888.jpg"
                  />
                </div>
                <div className="flex flex-row justify-end  bg-gray-100">
                  <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                    <a href="#">۲۳ ٪</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <a className="text-sm w-full  my-4 text-black">
                دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
              </a>
              <div className="flex flex-row justify-end gap-2">
                <a className="line-through ">۵۰۰۰۰</a>
                <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
              </div>
            </div>
          </div>

          <div className="w-full h-[320px]   flex flex-col">
            <div className="w-full h-[320px]   overflow-hidden ">
              <div className="w-full flex flex-col bg-white h-80 ">
                <div className="relative h-full flex flex-col bg-gray-100">
                  <div className="flex flex-row justify-start">
                    <div className="absolute  w-24 h-8 bg-white text-center">
                      <a href="#">نایس پاپت</a>
                    </div>
                  </div>

                  <img
                    style={{ mixBlendMode: "multiply" }}
                    className="bg-transparent min-w-52  max-w-52  min-h-52  max-h-52   mt-1"
                    src="/images/119218888.jpg"
                  />
                </div>
                <div className="flex flex-row justify-end  bg-gray-100">
                  <div className=" z-10 w-12 h-12 flex flex-col justify-center items-center bg-black text-white text-center">
                    <a href="#">۲۳ ٪</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <a className="text-sm w-full  my-4 text-black">
                دمپایی زنانه آویده کد 222 چسبی رنگ طوسی
              </a>
              <div className="flex flex-row justify-end gap-2">
                <a className="line-through ">۵۰۰۰۰</a>
                <a className=" font-semibold  text-black ">۱۸۹۰۰۰</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:my-20 sm:w-1/5 flex sm:flex-row px-4 justify-center sm:justify-start sm:items-start">
          <div className="  w-full flex flex-row  sm:flex-col justify-center items-center gap-4">
            <div>
              <img src="/images/100014194.png" className="w-16 h-16 mx-auto" />
            </div>
            <div className="flex gap-1  flex-col  text-black">
              <a className="text-sm  " href="#">
                مشاهده همه
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 mb-10">
        <div className="w-4/5 mx-auto mt-10">
          <img src="/images/49789bde.jpg" alt="" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 w-4/5 mx-auto text-center">
          <div className="col-span-1  flex gap-1 flex-col ">
            <a href="#" className="text-3xl mb-3 text-black">
              مردانه
            </a>
            <a href="#" className="text-[#000017]">
              کفش مردانه
            </a>
            <a href="#" className="text-[#000017]">
              اکسسوری مردانه
            </a>
            <a href="#" className="text-[#000017]">
              ورزشی مردانه
            </a>
          </div>
          <div className="col-span-1 w-full flex gap-1  flex-col">
            <a href="#" className="text-3xl mb-3  text-black">
              زنانه
            </a>
            <a href="#" className="text-[#000017]">
              کفش زنانه
            </a>
            <a href="#" className=" text-[#000017]">
              اکسسوری زنانه
            </a>
            <a href="#" className=" text-[#000017]">
              ورزشی زنانه
            </a>
          </div>
          <div className="col-span-1 w-full flex gap-1  flex-col">
            <a href="#" className="text-3xl mb-3 text-black">
              بچگانه
            </a>
            <a href="#" className="text-[#000017]">
              نوزاد
            </a>
            <a href="#" className="text-[#000017]">
              دختر
            </a>
            <a href="#" className="text-[#000017]">
              پسر
            </a>
          </div>
          <div className="col-span-1 w-full flex gap-1  flex-col">
            <a className="text-xl sm:text-2xl mb-3  text-black">
              زیبایی و سلامت
            </a>
            <a className="text-[#000017]">لوازم آرایشی</a>
            <a className="text-[#000017]">لوازم بهداشتی</a>
            <a className="text-[#000017]">لوازم شخصی برقی</a>
            <a className="text-[#000017]">عطر و ادکلن</a>
            <a className="text-[#000017]">ابزار سلامت</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1 w-4/5 mx-auto justify-center mb-10">
        <div className="flex flex-col w-full">
          <div>
            <img src="bafc4f4a.svg" className="w-32 mx-auto" />
            <p className="text-black font-semibold text-center">
              ضمانت اصل بودن کالا
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div>
            <img src="bc93f765.svg" className="w-32 mx-auto" />
            <p className="text-black font-semibold text-center">
              ۱۴ روز ضمانت بازگشت کالا
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div>
            <img src="c968eac8.svg" className="w-32 mx-auto" />
            <p className="text-black font-semibold text-center">
              ۱۴ روز ضمانت بازگشت کالا
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start pt-4 px-24 gap-4 mb-10">
        <div className="flex flex-row gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="207"
              height="34"
              viewBox="0 0 252 40"
            >
              <path
                fillRule="evenodd"
                d="M87.064 20.007v-2.3H67.108v4.6h15.341c-1.096 7.429-7.56 13.187-15.344 13.187-8.552 0-15.509-6.947-15.509-15.487S58.553 4.519 67.105 4.519c5.011 0 9.74 2.44 12.648 6.524l3.677-2.61C79.677 3.161 73.574.014 67.105.014c-11.04 0-20.02 8.968-20.02 19.993C47.085 31.03 56.065 40 67.105 40c11.038 0 20.018-8.969 19.96-19.993zm116.67 15.003V.624h-4.385V39.39h23.904v-4.38h-19.518zM192.272.624l-12.197 19.694L167.877.624h-5.16l15.14 24.446v14.32h4.387V25.147L197.432.624h-5.16zM126.838 36.65c2.438-2.062 3.726-5.085 3.726-8.738 0-3.717-1.506-6.531-4.474-8.366-2.425-1.5-5.855-2.368-10.795-2.734-8.999-.832-9-4.64-9-5.893 0-3.957 3.462-6.514 8.819-6.514 5.429 0 9.524 2.801 9.524 6.514h4.41C129.048 4.694 123.057 0 115.114 0c-7.789 0-13.228 4.49-13.228 10.918 0 3.069 1.305 5.626 3.776 7.395 2.165 1.55 5.277 2.521 9.25 2.885l.039.004c10.337.761 11.204 3.863 11.204 6.709 0 1.874 0 7.579-10.42 7.579-6.5 0-11.041-3.35-11.041-8.146h-4.41c0 7.271 6.498 12.55 15.451 12.55 4.825 0 8.56-1.092 11.103-3.245zM252 4.785V.625h-24.36v38.764H252v-4.38h-19.975V22.192h16.01v-4.38h-16.01V4.784H252zM160.673.602h-30.076v4.38h12.844V39.4h4.386V4.982h12.846V.602zM91.451 39.39h4.386V.624H91.45V39.39zm-53.174 0h4.386V.624h-4.386V39.39zM0 39.39V.623h14.448c10.586 0 19.22 8.507 19.406 19.034.193 10.883-8.774 19.731-19.672 19.731H0zm4.386-4.38h9.827c8.25 0 15.141-6.544 15.26-14.782.122-8.373-6.663-15.224-15.02-15.224H4.386V35.01z"
              />
            </svg>
          </div>
          <div className="w-4/5  border-b border-[#000005]"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 w-full ">
          <div className="col-span-1  flex gap-1 flex-col">
            <a href="#" className="mb-3 font-bold text-black">
              خرید
            </a>
            <a href="#" className="text-[#000017]">
              مردانه
            </a>
            <a href="#" className="text-[#000017]">
              زنانه
            </a>
            <a href="#" className="text-[#000017]">
              بچگانه
            </a>
          </div>
          <div className="col-span-1 w-full flex gap-1  flex-col">
            <a href="#" className="mb-3 font-bold  text-black">
              خدمات مشتریان
            </a>
            <a href="#" className="text-[#000017]">
              کفش زنانه
            </a>
            <a href="#" className=" text-[#000017]">
              اکسسوری زنانه
            </a>
            <a href="#" className=" text-[#000017]">
              ورزشی زنانه
            </a>
          </div>
          <div className="col-span-1 w-full flex gap-1  flex-col">
            <a href="#" className="mb-3 font-bold text-black">
              اطلاعات دیجی استایل
            </a>
            <a href="#" className="text-[#000017]">
              نوزاد
            </a>
            <a href="#" className="text-[#000017]">
              دختر
            </a>
            <a href="#" className="text-[#000017]">
              پسر
            </a>
          </div>

          <div className="col-span-1 w-full flex  flex-col">
            <a className="mb-3 font-bold  text-black">زیبایی و سلامت</a>
            <a className="text-[#000017]">لوازم آرایشی</a>
            <a className="text-[#000017]">لوازم بهداشتی</a>
            <a className="text-[#000017]">لوازم شخصی برقی</a>
            <a className="text-[#000017]">عطر و ادکلن</a>
            <a className="text-[#000017]">ابزار سلامت</a>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto  flex flex-row justify-between pt-4  gap-4 border-b border-black">
        <div className="w-2/4 text-black font-semibold">
          دانلود اپلیکیشن دیجی استایل
        </div>
        <div className="flex flex-wrap gap-2">
          <div className=" border border-gray-400 px-2">دریافت از بازار</div>
          <div className="border border-gray-400 px-2">دریافت از مایکت</div>
          <div className=" border border-gray-400 px-2">دریافت از گوگل پلی</div>
        </div>
      </div>
    </>
  );
}
