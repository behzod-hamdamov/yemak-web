import { Outlet } from "react-router"

import { Header } from "../../components"

export function MainLayout() {

  return (
    <div className="flex flex-col">
      <Header/>
      <Outlet />
    </div>
  )
}
