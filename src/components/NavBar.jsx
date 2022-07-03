import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <>
       <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand h1">
            Navbar
            <span className="badge rounded-pill bg-secondary mx-3">
              {this.props.totalProducts}
            </span>
          </span>
        </div>
      </nav>
           </>
        );
    }
}

export default NavBar;