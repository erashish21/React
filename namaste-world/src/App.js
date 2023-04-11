
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import Product from './components/Product.js';

function App() {
  const ProductList =[
    {
      price: 9999,
      name: "IPhone pro max",
      quantity:0,
    },
   
      {
        price: 999,
        name: "Redmi pro max",
        quantity:0,
      }
  ]
  return (
    <>
    <Navbar/>
    <ProductList ProductList ={ProductList}/>
    {/*<Footer/>*/}
    </>
  );
}

export default App;
