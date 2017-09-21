import React from 'react';

import ModalWindow from '../ModalWindow/ModalWindow';

import './style.scss';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isModalVisible: false,
      status: '',
      statusText: '',
      error:'',
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    });
  }

  componentDidMount() {
    fetch('http://504080.com/api/v1/services/categories', {
      method: 'get',
      headers: {
        'Authorization': '8c0a1718aabde50262873599262a70335a6f6d4c',
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        this.setState({
          status: response.status,
          statusText: response.statusText,
          isModalVisible: this.state.isModalVisible
        });
        console.log(`status ${this.state.status} statusText ${this.state.statusText} modal ${this.state.isModalVisible}`);
      }})
      .then((data) => {
        this.setState({
          categories: data.data
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          isModalVisible: !this.state.isModalVisible,
          });
      });
  }

  render() {
    return (
      <div className="main_container">
        <div className="main_header">
          <h2 className="main_title">
            Service Directory
          </h2>
          <button
            type="button"
            className="main_button"
          >
            Add New Service
          </button>
        </div>
        <div className="main_content">
          {this.state.categories.map(item => (
            <figure
              key={item.id}
              className="main_figure"
            >
              <a href="#">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="main_icon"
                />
              </a>
              <figcaption className="figure_title">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
        {this.state.isModalVisible && <ModalWindow
          onCloseModal={this.showModal}
        >
          <div className="modal_content">
            <i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true"></i>
            <p className="title_size">
              Something went wrong!
            </p>
            <p className="title_size-24">
              Try to solve this problem
            </p>
            <p className="modal_status">
              {this.state.status}
            </p>
            <p className="modal_status-text">
              {this.state.statusText}
            </p>
          </div>
        </ModalWindow>
        }
      </div>
    )
  }
}

export default Categories;
