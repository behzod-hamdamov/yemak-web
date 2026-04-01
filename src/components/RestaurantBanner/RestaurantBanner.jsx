export function RestaurantBanner({restaurant}) {
  return (
    <div className="overflow-hidden relative min-h-58.75 rounded-[20px]">
      <img
        src={restaurant.image}
        alt="image"
        className="absolute top-0 left-0 max-h-58.75 w-full object-cover rounded-[20px]"
      />
      <div className="flex flex-col justify-end gap-7 p-5 text-white w-full top-0 left-0 absolute h-full bg-[#14141480]">
        <h3 className="leading-10 font-semibold text-[32px]">
          {restaurant.name}
        </h3>
        <h5 className="flex gap-2 items-center p-[8px_12px] border border-[#FFFFFF14] w-max leading-4.5 text-sm font-normal rounded-xl shadow-[0px_6px_20px_0px_#12282F0F] bg-[#FFFFFF1A]">
          <span className="shrink-0">Время работы</span>
          <span className="font-semibold shrink-0">
            ({restaurant.work_time.from + "-" + restaurant.work_time.to})
          </span>
        </h5>
      </div>
    </div>
  );
}
