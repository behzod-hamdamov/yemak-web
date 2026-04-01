import {useFetch} from "../../hooks"

export function HomePage() {
  const data = useFetch("https://api.yemak.uz/user/restaurant")
  console.log(data)

  return (
    <main className="flex-1 pt-11">
      <div className="container">
        <h1 className="leading-10.5 text-[32px] font-bold pb-5">Restoranlar</h1>
      </div>
    </main>
  );
}
