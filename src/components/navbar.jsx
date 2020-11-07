import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <h1 className="navbar-title">Habit Tracker</h1>
        <span className="navbar-total">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;