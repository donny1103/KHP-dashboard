import React, { Component } from 'react';

function NavBar(props) {

    return (
      <div>
        <nav className="navbar">
          <div className="counsellor-profile">

          </div>
          <div className="high-priority">

          </div>
          <div className="medium-priority">

          </div>
          <div
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="navbar-userCount">{props.usersOnline} users online</span>
        </nav>
      </div>

    );

}
export default NavBar;