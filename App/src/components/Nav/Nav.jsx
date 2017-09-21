import React from 'react';
import uuid from 'uuid';

import './style.scss';

import feed from './assets/feed.png';
import ask from './assets/ask.png';
import companies from './assets/companies.png';
import services from './assets/services.png';

const items = [
  {title: 'Feed', icon: feed},
  {title: 'Ask a Colleague', icon: ask},
  {title: 'Companies', icon: companies},
  {title: 'Service Directory', icon: services},
];

const Nav = () => (
  <nav>
    <ul className="nav_list">
      {items.map(item => (
        <li
          key={uuid.v4()}
          className="nav_item hvr-sweep-to-right"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="nav_icon"
          />
          <a
            href="#"
            className="nav_link"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
