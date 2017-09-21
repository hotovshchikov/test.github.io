import React from 'react';

import './srtyle.scss';

import img from './article.jpg'

class Companies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="article_container">
        <div className="article_container-header">
          <h2>{this.props.title}</h2>
          <a href="#">See All</a>
        </div>
        <ul className="article_container-content">
          <li className="article_item">
            <article className="article">
              <img
                src={img}
                alt="article"
                className="article_img"
              />
              <h1 className="article_title">
                Company Name
              </h1>
              <p className="article_text">
                Manufactuer
              </p>
              <p className="article_city">
                Belgrade, Serbia
              </p>
              <a
                href="#"
                className="article_link"
              >
                {this.props.link}
              </a>
            </article>
          </li>
          <li className="article_item">
            <article className="article">
              <img
                src={img}
                alt="article"
                className="article_img"
              />
              <h1 className="article_title">
                Company Name
              </h1>
              <p className="article_text">
                Manufactuer
              </p>
              <p className="article_city">
                Belgrade, Serbia
              </p>
              <a
                href="#"
                className="article_link"
              >
                {this.props.link}
              </a>
            </article>
          </li>
          <li className="article_item">
            <article className="article">
              <img
                src={img}
                alt="article"
                className="article_img"
              />
              <h1 className="article_title">
                Company Name
              </h1>
              <p className="article_text">
                Manufactuer
              </p>
              <p className="article_city">
                Belgrade, Serbia
              </p>
              <a
                href="#"
                className="article_link"
              >
                {this.props.link}
              </a>
            </article>
          </li>
        </ul>
      </section>
    )
  }
}

export default Companies;
