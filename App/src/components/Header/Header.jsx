import React from 'react';

import './style.scss';

import logo from './assets/logo.png';
import search from './assets/search.png';
import chat from './assets/chat.png';
import bell from './assets/bell.png';
import user from './assets/avatar.jpg';

const Header = () => (
  <div className="header_wrapper">
    <header className="header">
      <a
        href="#"
        className="logo"
      >
        <img
          src={logo}
          alt="logo"
        />
      </a>
      <div className="search_panel">
        <button className="search_icon">
          <img
            src={search}
            alt="search"
          />
        </button>
        <input
          className="search_input"
          type="text"
          placeholder="Company Name"
        />
      </div>
      <button className="chat_icon">
        <img
          src={chat}
          alt="chat"
        />
      </button>
      <button className="bell_icon">
        <img
          src={bell}
          alt="notifications"
        />
      </button>
      <div className="user_log">
        <a href="#">
          <img
            className="user_avatar"
            src={user}
            alt="user"
          />
        </a>
        <a
          href="#"
          className="user_name"
        >
          Maximillian Beekeeper
        </a>
      </div>
    </header>
  </div>
);

export default Header;
