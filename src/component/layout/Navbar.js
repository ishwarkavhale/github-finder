import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  //we can also pass the props in  function like that function name({props1,props2..})
  return (
    <nav className="navbar bg-primary">
      <h2>
        <i className="fa fa-github" /> {props.title}
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// we can also set defaultProps in funtion componnt if not passed in app.js file
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github',
};
// we can also set the PropTypes of props if required
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
