import React from 'react';

import './style.scss';

import ava from './assets/user.jpg';

class Users extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="user_container">
        <div className="user_container-header">
          <h2>{this.props.title}</h2>
          <a href="#">See All</a>
        </div>
        <ul className="user_container-content">
          <li className="user_item">
            <a
              href="#"
              className="user_item-name"
            >
              {this.props.user}
            </a>
            <div className="user_info">
              <a href="#" className="user_img">
                <img
                  src={ava}
                  alt="avatar"

                />
              </a>
              <div className="user_info-text">
                <p className="user_job">
                  {this.props.info}
                </p>
                <p className="user_city">
                  {this.props.city}
                </p>
                <a
                  href="#"
                  className="user_link"
                >
                  {this.props.link}
                </a>
              </div>
            </div>
          </li>
          <li className="user_item">
            <a
              href="#"
              className="user_item-name"
            >
              {this.props.user}
            </a>
            <div className="user_info">
              <a href="#" className="user_img">
                <img
                  src={ava}
                  alt="avatar"

                />
              </a>
              <div className="user_info-text">
                <p className="user_job">
                  {this.props.info}
                </p>
                <p className="user_city">
                  {this.props.city}
                </p>
                <a
                  href="#"
                  className="user_link"
                >
                  {this.props.link}
                </a>
              </div>
            </div>
          </li>
          <li className="user_item">
            <a
              href="#"
              className="user_item-name"
            >
              {this.props.user}
            </a>
            <div className="user_info">
              <a href="#" className="user_img">
                <img
                  src={ava}
                  alt="avatar"

                />
              </a>
              <div className="user_info-text">
                <p className="user_job">
                  {this.props.info}
                </p>
                <p className="user_city">
                  {this.props.city}
                </p>
                <a
                  href="#"
                  className="user_link"
                >
                  {this.props.link}
                </a>
              </div>
            </div>
          </li>
          <li className="user_item">
            <a
              href="#"
              className="user_item-name"
            >
              {this.props.user}
            </a>
            <div className="user_info">
              <a href="#" className="user_img">
                <img
                  src={ava}
                  alt="avatar"

                />
              </a>
              <div className="user_info-text">
                <p className="user_job">
                  {this.props.info}
                </p>
                <p className="user_city">
                  {this.props.city}
                </p>
                <a
                  href="#"
                  className="user_link"
                >
                  {this.props.link}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default Users;
