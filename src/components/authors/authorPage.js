"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList");
var Router = require("react-router");
var Link = require("react-router-dom").Link;

var AuthorPage = createReactClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },

  // set author array data
  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({ authors: AuthorApi.getAllAuthors() });
    }
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
