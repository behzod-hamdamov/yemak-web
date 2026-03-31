import { Outlet } from "react-router"

import { Header, Footer } from "../../components"

export function MainLayout() {

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}
