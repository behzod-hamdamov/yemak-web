import { Link } from "react-router";

import { useState } from "react";

import { HeaderBtn } from "../HeaderBtn/HeaderBtn";

import logoIcon from "../../assets/icons/logo-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import xMarkIcon from "../../assets/icons/x-mark-icon.svg";
import locationIcon from "../../assets/icons/location-icon.svg";
import loginIcon from "../../assets/icons/login-icon.svg"

export function Header() {
  const [inputValue, setInputValue] = useState("");
  const [clearBtn, setClearBtn] = useState(false);
  const btns = [
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21H5H4ZM19 21L18.4453 21.8321C18.7522 22.0366 19.1467 22.0557 19.4719 21.8817C19.797 21.7077 20 21.3688 20 21H19ZM16 19L16.5547 18.1679C16.1581 17.9035 15.63 17.9558 15.2929 18.2929L16 19ZM14 21L13.2929 21.7071C13.6834 22.0976 14.3166 22.0976 14.7071 21.7071L14 21ZM12 19L12.7071 18.2929C12.3166 17.9024 11.6834 17.9024 11.2929 18.2929L12 19ZM10 21L9.29289 21.7071C9.68342 22.0976 10.3166 22.0976 10.7071 21.7071L10 21ZM8 19L8.70711 18.2929C8.37004 17.9558 7.84192 17.9035 7.4453 18.1679L8 19ZM4.4453 20.1679C3.98577 20.4743 3.8616 21.0952 4.16795 21.5547C4.4743 22.0142 5.09517 22.1384 5.5547 21.8321L5 21L4.4453 20.1679ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8V7V6ZM15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6V7V8ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12V11V10ZM15 12C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10V11V12ZM13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16V15V14ZM15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14V15V16ZM5 21H6V5H5H4V21H5ZM5 5H6C6 4.44772 6.44772 4 7 4V3V2C5.34315 2 4 3.34315 4 5H5ZM7 3V4H17V3V2H7V3ZM17 3V4C17.5523 4 18 4.44772 18 5H19H20C20 3.34315 18.6569 2 17 2V3ZM19 5H18V21H19H20V5H19ZM19 21L19.5547 20.1679L16.5547 18.1679L16 19L15.4453 19.8321L18.4453 21.8321L19 21ZM16 19L15.2929 18.2929L13.2929 20.2929L14 21L14.7071 21.7071L16.7071 19.7071L16 19ZM14 21L14.7071 20.2929L12.7071 18.2929L12 19L11.2929 19.7071L13.2929 21.7071L14 21ZM12 19L11.2929 18.2929L9.29289 20.2929L10 21L10.7071 21.7071L12.7071 19.7071L12 19ZM10 21L10.7071 20.2929L8.70711 18.2929L8 19L7.29289 19.7071L9.29289 21.7071L10 21ZM8 19L7.4453 18.1679L4.4453 20.1679L5 21L5.5547 21.8321L8.5547 19.8321L8 19ZM9 7V8H15V7V6H9V7ZM9 11V12H15V11V10H9V11ZM13 15V16H15V15V14H13V15Z"
            fill="#B0B7BA"
          />
        </svg>
      ),
      title: "Buyurtmalar",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 4L17 10"
            stroke="#B0B7BA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 10L19 18C18.8071 19.1828 17.9655 20.0243 17 20H7C6.03448 20.0243 5.19295 19.1828 5 18L3 10H21Z"
            stroke="#B0B7BA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="15"
            r="2"
            stroke="#B0B7BA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Savatcha",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="#B0B7BA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.59998 9H20.4"
            stroke="#B0B7BA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.59998 15H20.4"
            stroke="#B0B7BA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 3C8.06298 8.50778 8.06298 15.4922 11.5 21"
            stroke="#B0B7BA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 3C15.9371 8.50778 15.9371 15.4922 12.5 21"
            stroke="#B0B7BA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "O’zbekcha",
    },
  ];

  function inputFn(e) {
    if (e.target.value.trimStart().length) setClearBtn(true);
    else setClearBtn(false);
    setInputValue(e.target.value.trimStart());
  }

  function handleClick() {
    setClearBtn(false);
    setInputValue("");
  }

  return (
    <header className="p-[18px_0] bg-white border border-[rgba(240,240,240,1)] shadow-[0px_6px_20px_0px_rgba(18,40,47,0.06)]">
      <div className="container flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link>
            <img src={logoIcon} alt="logo" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center relative">
              <img
                src={searchIcon}
                alt="search-icon"
                className="absolute left-2.5"
              />
              <input
                type="text"
                value={inputValue}
                className="font-semibold leading-4.25 text-sm m-0 caret-[rgba(237,200,67,1)] text-[rgba(18,40,47,1)] placeholder:text-[rgba(176,183,186,1)] bg-[rgba(247,247,247,1)] p-[12px_38px] border border-[rgba(240,240,240,1)] rounded-[10px] focus:border-[rgba(237,200,67,1)] duration-300"
                placeholder="Izlash"
                onChange={inputFn}
              />
              {clearBtn && (
                <button className="absolute right-2.5" onClick={handleClick}>
                  <img src={xMarkIcon} alt="x-mark" />
                </button>
              )}
            </div>
            <button className="bg-[#15CC69] p-3 rounded-[10px] active:scale-90 duration-300 ease-out">
              <img src={locationIcon} alt="location-icon" />
            </button>
          </div>
        </nav>
        <div className="flex items-center gap-6">
          {btns.map((btn, i) => <HeaderBtn svg={btn.svg} title={btn.title} key={i}/>)}
          <button className="flex gap-1 items-center p-[9px_24px] bg-[#F7F7F7] rounded-[10px] border border-[#F0F0F0]">
            <img src={loginIcon} alt="login-icon" />
            <span className="font-semibold text-[15px] leading-4.75">Kirish</span>
          </button>
        </div>
      </div>
    </header>
  );
}
