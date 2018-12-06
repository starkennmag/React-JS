import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductItem from './products-item'

const products = [
{
  name: 'iPad',
  price: 200
},
{
  name: 'Samsung',
  price: 5
}
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
      products: []
     };

     this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount(){
      const products = this.getProducts();

      this.setState({ products });
  }

  getProducts(){
    return JSON.parse(localStorage.getItem('products'));
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product !== name;
    });
    console.log(filteredProducts)
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

        {
          this.state.products.map(product => {
            return (
              <ProductItem
              key={product.name}
              {...product}
              onDelete={this.onDelete}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;