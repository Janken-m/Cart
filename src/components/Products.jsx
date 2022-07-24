import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const {onReset , product} = this.props;

    return (
      <>
        <button onClick={onReset} className="btn btn-primary my-3 mx-5">
          Reset
        </button>
        {product.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </>
    );
  }
}

export default Products;