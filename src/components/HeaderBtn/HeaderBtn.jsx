export function HeaderBtn({svg, title}) {
  return (
    <button className="flex flex-col items-center gap-0.5">
      {svg}
      <span className="text-xs text-[#5A696E] font-semibold">{title}</span>
    </button>
  )
}
