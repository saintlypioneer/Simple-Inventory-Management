import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signup";
import AddProduct from "./components/addproduct";
import ProductList from "./components/productlist";
import Cart from "./components/cart";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [navTab, setNavTab] = useState("addProduct");

  const style = {
    padding: "10px 10px",
  };

  var productlist = [
    {
      id: 1,
      name: 'MacBook Air1',
      price: '116000',
      desc: 'Forms are used to gather information about a person, a product, or a company and are very vital in conducting surveys. Bootstrap forms are the combination of text fields, textareas, selection boxes, radio buttons, and checkboxes. Applying CSS manually on forms is a boring and time taking process that’s why bootstrap makes it easy for us with the help of predefined bootstrap classes',
    },
    {
      id: 2,
      name: 'MacBook Air2',
      price: '116000',
      desc: 'Forms are used to gather information about a person, a product, or a company and are very vital in conducting surveys. Bootstrap forms are the combination of text fields, textareas, selection boxes, radio buttons, and checkboxes. Applying CSS manually on forms is a boring and time taking process that’s why bootstrap makes it easy for us with the help of predefined bootstrap classes',
    },
    {
      id: 3,
      name: 'MacBook Air3',
      price: '116000',
      desc: 'Forms are used to gather information about a person, a product, or a company and are very vital in conducting surveys. Bootstrap forms are the combination of text fields, textareas, selection boxes, radio buttons, and checkboxes. Applying CSS manually on forms is a boring and time taking process that’s why bootstrap makes it easy for us with the help of predefined bootstrap classes',
    },
    {
      id: 4,
      name: 'MacBook Air4',
      price: '116000',
      desc: 'Forms are used to gather information about a person, a product, or a company and are very vital in conducting surveys. Bootstrap forms are the combination of text fields, textareas, selection boxes, radio buttons, and checkboxes. Applying CSS manually on forms is a boring and time taking process that’s why bootstrap makes it easy for us with the help of predefined bootstrap classes',
    },
  ];

  return (
    <div className="" style={style}>
      <nav
        class="navbar navbar-expand-lg navbar-dark  ps-5"
        style={{
          "background-color": "#68623A",
        }}
      >
        <a class="navbar-brand" href="#">
          Aman's [Store]
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a onClick={()=>setNavTab('addProduct')} class="nav-link" href="#">
                {/* Home <span class="sr-only">(current)</span> */}
                Add Product
              </a>
            </li>
            <li class="nav-item">
              <a onClick={()=>setNavTab('products')} class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a onClick={()=>setNavTab('cart')} class="nav-link" href="#">
                Cart
              </a>
            </li>
            {/* <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
          </ul>
        </div>
      </nav>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <ProductList/> */}
      {/* <Cart /> */}
      {navTab=='addProduct'&&<AddProduct />}
      {navTab=='products'&&<ProductList/>}
      {navTab=='cart'&&<Cart />}
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div>
  );
}

export default App;
