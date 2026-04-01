import { useParams } from "react-router";
import { useFetch } from "../../hooks";

export function RestaurantPage() {
  const restaurants = useFetch("https://api.yemak.uz/user/restaurant");
  const { id } = useParams();
  const restaurant =
    restaurants &&
    restaurants.data.restaurants.find((restaurant) => restaurant.id == id);

  return (
    <main className="flex-1 pt-8 pb-15">
      <div className="container">
      </div>
    </main>
  );
}
