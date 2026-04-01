import { createPortal } from "react-dom";

import { splitPrice } from "../../utils/helper";

export function ProductModal({ handleClick, product }) {

  return createPortal(
    <div
      className="flex justify-center items-center fixed w-full h-full top-0 bg-[#0D0D0DE0] cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="flex flex-col gap-5 relative p-5 bg-white rounded-[20px] cursor-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={product.photo}
          alt="photo"
          className="rounded-[14px] min-h-82.5 object-cover"
        />
        <button
          onClick={handleClick}
          className="m-0 absolute -top-10 right-0 bg-[#F7F7F7] rounded-full border border-[#F0F0F0]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8995 7.00006L7 16.8996M16.8995 16.8995L7 7"
              stroke="#5A696E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-5">
            <h5 className="leading-4.5 text-[32px] font-semibold pb-1">
              {product.name}
            </h5>
            <div className="flex flex-col min-h-9.5 justify-end">
              {product.price !== product.price_original && (
                <span className="leading-3.75 text-xs font-normal text-[#FF5A5A] line-through">
                  {splitPrice(product.price_original)} UZS
                </span>
              )}
              <h5 className="leading-5.5 text-lg font-bold">
                {splitPrice(product.price)} so'm
              </h5>
            </div>
          </div>
          <button className="p-[12px_0] max-w-62.5 w-full bg-[#EDC843] text-[#12282F] rounded-[10px] active:scale-[.97] duration-300 font-semibold leading-5 text-[15px]">Savatchaga</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
