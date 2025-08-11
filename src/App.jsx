import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import Login from "./components/Login"
import { Provider } from "react-redux"
import { appStore } from "./store/appStore"

function App() {


  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
