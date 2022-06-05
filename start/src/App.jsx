import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={`/Products`} element={<Products/>}></Route>
        <Route path={`/Products/:id`} element={<Product/>}></Route>
      </Routes>
    </div>
  )
}

export default App
