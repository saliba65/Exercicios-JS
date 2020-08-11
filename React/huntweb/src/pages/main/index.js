import React, { Component } from "react";
import api from "../../services/api";

import './styless.css'

export default class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");

    //console.log(response.data.docs);
    this.setState({ products: response.data.docs });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map((product) => (
          <article key={product._id}>
            <p>{product.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}
