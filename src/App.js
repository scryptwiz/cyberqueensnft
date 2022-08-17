import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import { createStore } from 'redux'
import pageReducer from "./store/PageStore"
const pageStore = createStore(pageReducer)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Provider store={pageStore}><Mainpage/></Provider>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App