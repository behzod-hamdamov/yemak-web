import { Link } from "react-router";

import logoIcon from "../../assets/icons/logo-icon.svg";

import appstoreImage from "../../assets/images/appstore-image.png"
import playMarketIcon from "../../assets/images/play-market-image.png"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="pt-6 pb-8">
        <div className="container flex gap-5 flex-col">
          <Link to="/">
            <img src={logoIcon} alt="logo-icon" />
          </Link>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="text-[16px] font-semibold leading-5 text-[#12282F]"
                >
                  Biz haqimizda
                </Link>
                <Link
                  to="/"
                  className="text-[16px] font-semibold leading-5 text-[#12282F]"
                >
                  Ommaviy oferta
                </Link>
                <Link
                  to="/"
                  className="text-[16px] font-semibold leading-5 text-[#12282F]"
                >
                  Bog’lanish
                </Link>
              </div>
              <p className="text-[#5A696E] text-[12px] font-normal leading-4.5 max-w-126.5">
                10 dan oshiq restoran, choyxona va kafelarni tanlab oson
                buyurtma berishingiz mumkin. Bularning barchasini telefoningizda
                turib bajarish mumkin
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="https://apps.apple.com/us/app/yemak-food-delivery-in-karshi/id1644243734" target="_blank">
                <img src={appstoreImage} alt="store" />
              </Link>
              <Link to="https://play.google.com/store/apps/details?id=uz.yemak.app" target="_blank">
                <img src={playMarketIcon} alt="store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[12px_0] border-t border-[#F0F0F0]">
        <div className="container flex items-center justify-between">
          <h5 className="text-[#12282F] font-normal text-[15px] leading-3.75">
            © Yemak Delivery 2022. Barcha huquqlar himoyalangan.
          </h5>
          <div className="flex items-center gap-2">
            <Link to="https://t.me/yemak" target="_blank" className="group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-gray-950 duration-300"
                  d="M3.25741 9.246L16.0813 3.70382C16.6844 3.44319 17.3378 3.95034 17.235 4.59921L15.4816 15.6625C15.3733 16.3459 14.5275 16.6073 14.0526 16.1041L11.2745 13.1416C10.7103 12.5439 10.666 11.624 11.1704 10.9749L13.1026 8.27472C13.2188 8.12524 13.0354 7.9286 12.8782 8.03405L8.83875 10.7439C8.15327 11.2038 7.32154 11.3929 6.5046 11.2748L3.46872 10.8357C2.63707 10.7154 2.48606 9.57936 3.25741 9.246Z"
                  stroke="#5A696E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="https://www.facebook.com/yemakuz"
              target="_blank"
              className="group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-gray-950 duration-300"
                  d="M15 2.5H13.3333C10.5719 2.5 8.33333 4.73858 8.33333 7.5V8.33333H5V11.6667H8.33333V17.5H11.6667V11.6667H15V8.33333H11.6667V6.83333C11.6667 6.28105 12.1144 5.83333 12.6667 5.83333H15V2.5Z"
                  stroke="#5A696E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="https://www.instagram.com/yemak.uz"
              target="_blank"
              className="group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="group-hover:stroke-gray-950 duration-300"
                  x="3.33333"
                  y="3.33337"
                  width="13.3333"
                  height="13.3333"
                  rx="4"
                  stroke="#5A696E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  className="group-hover:stroke-gray-950 duration-300"
                  cx="10"
                  cy="10"
                  r="2.5"
                  stroke="#5A696E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="group-hover:stroke-gray-950 duration-300"
                  d="M13.75 6.24999V6.25082"
                  stroke="#5A696E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <h5 className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16667 3.33337H7.5L9.16667 7.50004L7.08333 8.75004C7.9758 10.5596 9.44039 12.0242 11.25 12.9167L12.5 10.8334L16.6667 12.5V15.8334C16.6667 16.7538 15.9205 17.5 15 17.5C8.27304 17.0912 2.9088 11.727 2.5 5.00004C2.5 4.07957 3.24619 3.33337 4.16667 3.33337"
                  stroke="#B0B7BA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#12282F] font-normal text-[15px] leading-3.75">
                +998 71 200 70 07
              </span>
            </h5>
            <h5 className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.5"
                  y="4.16663"
                  width="15"
                  height="11.6667"
                  rx="2"
                  stroke="#B0B7BA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 5.83337L10 10.8334L17.5 5.83337"
                  stroke="#B0B7BA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#12282F] font-normal text-[15px] leading-3.75">
                info@yemak.uz
              </span>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
