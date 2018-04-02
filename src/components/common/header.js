"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var Link = require("react-router-dom").Link;

var Header = createReactClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* 
        to: string
        A string representation of the location to link to, created by concatenating the location's pathname, search, and hash properties.
        Link to route tag name attritube
        */}
          <Link to="/" className="navbar-brand">
            <img src="images/pluralsight-logo.png" />
          </Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
