import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.product)}
          className="btn btn-secondary mx-3 "
        >
          +
        </button>
        <button onClick={()=> this.props.onDicrement(this.props.product)}
        className="btn btn-secondary"
        >
            -

        </button>
        <button
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="btn btn-danger m-2"
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge me-2 bg-";
    classes +=
      this.props.product.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    const { quantity } = this.props.product;
    return quantity === 0 ? "Zero" : quantity;
  }
}

export default Product;