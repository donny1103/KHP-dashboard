import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function NavBar(props) {

    const priorityList = props.priorityList;

    // when the user clicks on a priority tab
    // const onClick = event => {
    //     if (event.key === "Enter") {
    //         props.addMessage(event.target.value);
    //         event.target.value = '';
    //     }
    // }

    function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

      return (
        <a href="#" onClick={handleClick}>
          Click me
        </a>
      );
    }


    return (
      <div className="navbar">
        <nav>
          <div className="counsellor-profile">
              <img src="./img/profile_img.png" className="profile-img" />
          </div>

            <Button variant="contained" className="nav-button immediate-priority">
              Immediate Priority
            </Button>

            <Button variant="contained" className="nav-button high-priority">
              High Priority
            </Button>

            <Button variant="contained" className="nav-button medium-priority">
              Medium Priority
            </Button>

            <Button variant="contained" className="nav-button low-priority">
              Low Priority
            </Button>

        </nav>
      </div>

    );

}
export default NavBar;
