import { RestaurantItem } from "../RestaurantItem/RestaurantItem";

export function RestaturantsList({ restaurants }) {
  return (
    <ul className="pt-8 grid grid-cols-3 gap-6 pb-13">
      {restaurants.map((restaurant) => (
        <RestaurantItem restaurant={restaurant} key={restaurant.id}/>
      ))}
    </ul>
  );
}
