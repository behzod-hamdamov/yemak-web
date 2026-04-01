import { Routes, Route } from "react-router"

import { MainLayout } from "./layouts/MainLayout/MainLayout"

import { HomePage, RestaurantPage } from "./pages"

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>} >
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/restaurant/:id" element={<RestaurantPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
