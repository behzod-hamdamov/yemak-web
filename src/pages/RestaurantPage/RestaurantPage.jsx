import { useParams } from "react-router";
import { useFetch } from "../../hooks";
import { CategoryList, ProductsList, RestaurantBanner } from "../../components";

export function RestaurantPage() {
  const { id } = useParams();
  const restaurants = useFetch("https://api.yemak.uz/user/restaurant");
  const categories = useFetch(
    "https://api.yemak.uz/user/restaurant/category?id=" + id
  );
  const products = useFetch(
    "https://api.yemak.uz/user/restaurant/product?id=" + id
  );
  const restaurant =
    restaurants &&
    restaurants.data.restaurants.find((restaurant) => restaurant.id == id);
  console.log(products);

  return (
    <main className="flex-1 pt-8 pb-15">
      <div className="container flex flex-col gap-6">
        {restaurant && <RestaurantBanner restaurant={restaurant} />}
        {categories && <CategoryList categories={categories.data} />}
        {products && <ProductsList products={products} /> }
      </div>
    </main>
  );
}
