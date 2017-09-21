import React from 'react';

import './style.scss';

import prod from './assets/product.jpg';

class Products extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="product_container">
        <div className="product_container-header">
          <h2>{this.props.title}</h2>
          <a href="#">See All</a>
        </div>
        <ul className="product_container-content">
          <li className="product_item">
            <a
              href="#"
              className="product_item-name"
            >
              {this.props.product}
            </a>
            <div className="product_info">
              <a href="#" className="product_img">
                <img
                  src={prod}
                  alt="avatar"

                />
              </a>
              <div className="product_info-text">
                <p className="product_title">
                  {this.props.info}
                </p>
                <p className="product_description">
                  {this.props.description}
                </p>
              </div>
            </div>
          </li>
          <li className="product_item">
            <a
              href="#"
              className="product_item-name"
            >
              {this.props.product}
            </a>
            <div className="product_info">
              <a href="#" className="product_img">
                <img
                  src={prod}
                  alt="avatar"

                />
              </a>
              <div className="product_info-text">
                <p className="product_title">
                  {this.props.info}
                </p>
                <p className="product_description">
                  {this.props.description}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default Products;
