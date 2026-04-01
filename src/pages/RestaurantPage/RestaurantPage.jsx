import { useParams } from "react-router";
import { useFetch } from "../../hooks";
import { CategoryList, RestaurantBanner } from "../../components";

export function RestaurantPage() {
  const restaurants = useFetch("https://api.yemak.uz/user/restaurant");
  const { id } = useParams();
  const restaurant =
    restaurants &&
    restaurants.data.restaurants.find((restaurant) => restaurant.id == id);
  const categories = useFetch("https://api.yemak.uz/user/restaurant/category?id=" + id)

  return (
    <main className="flex-1 pt-8 pb-15">
      <div className="container flex flex-col gap-6">
        {restaurant && <RestaurantBanner restaurant={restaurant} />}
        {categories && <CategoryList categories={categories.data} /> }
      </div>
    </main>
  );
}
