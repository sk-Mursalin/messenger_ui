import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import Login from "./components/Login"
import { Provider } from "react-redux"
import { appStore } from "./store/appStore"
import { Feed } from "./components/Feed"
import Chat from "./components/Chat"

function App() {


  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/messenger">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Feed />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
