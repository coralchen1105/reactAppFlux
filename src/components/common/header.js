"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
// var Link = require("react-router-dom").Link;

var Header = createReactClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src="images/pluralsight-logo.png" />
          </a>
          <ul className="nav navbar-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#authors">Authors</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
