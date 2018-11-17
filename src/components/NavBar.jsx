import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

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
          <div className="counsellor-profile">
              <img src="./img/profile_img.png" className="profile-img" />
          </div>

            <Badge color="primary" badgeContent={4} className="queue-badge">
              <Button variant="contained" className="nav-button immediate-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D23827FF"}}>
                Immediate Priority
              </Button>
            </Badge>

            <Badge color="primary" badgeContent={4} className="queue-badge">
              <Button variant="contained" className="nav-button high-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D37B2CFF"}}>
                High Priority
              </Button>
            </Badge>

            <Badge color="primary" badgeContent={4} className="queue-badge">
              <Button variant="contained" className="nav-button medium-priority" style={{marginBottom: "1.5rem", backgroundColor: "#CBA745FF"}}>
                Medium Priority
              </Button>
            </Badge>

            <Badge color="primary" badgeContent={4} className="queue-badge">
              <Button variant="contained" className="nav-button low-priority" style={{backgroundColor: "#55AF39FF"}}>
                Low Priority
              </Button>
            </Badge>
      </div>

    );
}
export default NavBar;
