import { CategoryItem } from "../CategoryItem/CategoryItem";

export function CategoryList({ categories }) {

  return (
    <ul className="flex gap-1 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-2 bg-white rounded-xl">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </ul>
  );
}
