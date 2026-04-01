import { Routes, Route } from "react-router"

import { MainLayout } from "./layouts/MainLayout/MainLayout"

import { HomePage } from "./pages"

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>} >
          <Route path="/" element={<HomePage/>} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
