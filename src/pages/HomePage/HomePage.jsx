import {useFetch} from "../../hooks"

import { CategoryList } from "../../components";

export function HomePage() {
  const restaurants = useFetch("https://api.yemak.uz/user/restaurant")
  const categories = useFetch("https://api.yemak.uz/user/category")

  return (
    <main className="flex-1 pt-11">
      <div className="container">
        <h1 className="leading-10.5 text-[32px] font-bold pb-5">Restoranlar</h1>
        {categories && <CategoryList categories={categories.data} />}
      </div>
    </main>
  );
}
