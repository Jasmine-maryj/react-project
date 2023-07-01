import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import React, { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  let productList = [
    { price: 100, name: "Spring", "quantity": 0 },
    { price: 200, name: "SpringCloud", "quantity": 0 }];

  let setProductList = 0;
  [productList, setProductList] = useState(productList)
  let [totalAmount, setTotalAmount] = useState(0)

  const increaseQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }
  const decreaseQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    if (productList[index].quantity > 0) {
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const resetTotal = () => {
    let newProductList = [...productList]
    newProductList.map((product) => {
      product.quantity = 0
    })
    setProductList(newProductList)
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index, 1)
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }

  const addItem = (name, price) =>{
    let newProductList = [...productList]
    newProductList.push({
      price:price,
      name:name,
      quantity:0
  });
  setProductList(newProductList)
  }

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <AddItem addItem={addItem}/>
        <ProductList productList={productList} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetTotal={resetTotal} />
    </>
  );
}

export default App;
