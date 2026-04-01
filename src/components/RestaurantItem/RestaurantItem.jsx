import { Link } from "react-router";

export function RestaurantItem({ restaurant }) {
  return (
    <li className="bg-white rounded-2xl">
      <Link to={"restaurant/" + restaurant.id}>
        <div className="overflow-hidden rounded-2xl">
          <img src={restaurant.image} alt="image" className="hover:scale-[1.1] duration-300 ease-out" />
        </div>
        <div className="flex flex-col p-3 pb-4 gap-1.5">
          <h5 className="leading-5 font-bold text-[16px]">{restaurant.name}</h5>
          <p className="max-w-77.5 truncate text-[#5A696E] leading-3.5 text-sm">
            {restaurant.tags.join(", ")}
          </p>
        </div>
      </Link>
    </li>
  );
}
