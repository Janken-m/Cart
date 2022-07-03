import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 4 },
      { id: 3, quantity: 8 },
      { id: 4, quantity: 9 },
    ],
  };

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handleDicrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity--;
    this.setState({ products });
  }

  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  handleDelete = (id) => {
    const products = this.state.products.filter((product) => product.id !== id);
    this.setState({ products });
  };

  render() {
    return (
      <>
        <NavBar totalProducts={this.state.products.length} />
        <div className="container">
          <Products
            products={this.state.products}
            onIncrement={this.handleIncrement}
            onDicrement={this.handleDicrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}

export default App;