import React from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

function NavBar(props) {

    return (
      <div className="navbar">
        <div className="counsellor-profile">
            <img src="./img/profile_img.png" className="profile-img" />
        </div>

        <Button variant="contained" className="nav-button immediate-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D23827FF"}}>
            Immediate Priority
            <Badge color="primary" badgeContent={4} className="queue-badge" />
        </Button>
          
        <Button variant="contained" className="nav-button high-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D37B2CFF"}}>
          High Priority
          <Badge color="primary" badgeContent={4} className="queue-badge" />
        </Button>
        
        <Button variant="contained" className="nav-button medium-priority" style={{marginBottom: "1.5rem", backgroundColor: "#CBA745FF"}}>
          Medium Priority
          <Badge color="primary" badgeContent={4} className="queue-badge" />
        </Button>

        <Button variant="contained" className="nav-button low-priority" style={{backgroundColor: "#55AF39FF"}}>
          Low Priority
          <Badge color="primary" badgeContent={4} className="queue-badge" />
        </Button>
      </div>

    );
}
export default NavBar;
