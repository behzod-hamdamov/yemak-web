import { Routes, Route } from "react-router"

import { MainLayout } from "./layouts/MainLayout/MainLayout"

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>} >
          <Route path="/" />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
