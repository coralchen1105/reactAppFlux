"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var AuthorStore = require("../../stores/authorStore");
var AuthorActions = require("../../actions/authorActions");
var AuthorList = require("./authorList");
var Router = require("react-router");
var Link = require("react-router-dom").Link;

var AuthorPage = createReactClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  // UI will change when component mount, without this code, still delet data but UI doesn't change
  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },

  //Clean up when this component is unmounted
  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        {/* pass authors data as props to AuthorList component */}
        <Link to="author" className="btn btn-default">
          Add Author
        </Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage;
