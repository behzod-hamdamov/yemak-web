import { memo } from "react"

export const CategoryItem = memo(({category}) => {
  return (
    <li className="p-[6px_12px] pr-0 shrink-0 h-8 flex items-center" key={category.id}>
      <span className="pr-4 border-r border-[#F0F0F0] text-sm leading-5 cursor-pointer font-semibold">{category.title}</span>
    </li>
  )
})
