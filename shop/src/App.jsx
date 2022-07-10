import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
// import { getProducts } from './features/productsSlice'

function App() {
  // const {products}= useSelector((state)=> getProducts(state));
  // console.log(products);

  return (
    <div className="App">
      {/* {products.map(((product)=><div key={product.id}>{product.title}</div>))} */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductsList />}/>
          <Route path='/product/:id' element={<Product />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
