"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var ReactRouter = require("react-router-dom");
var AuthorForm = require("./authorForm");
// var AuthorActions = require("../../actions/authorActions");
// var AuthorStore = require("../../stores/authorStore");
var toastr = require("toastr");

// var Redirect = ReactRouter.Redirect;
// var Prompt = ReactRouter.Prompt;

var ManageAuthorPage = createReactClass({
  getInitialState: function() {
    return {
      author: { id: "", firstName: "", lastName: "" },
      errors: {},
      dirty: false,
      redirect: false
    };
  },

  // update state from child component
  // called every single key press
  setAuthorState: function(event) {
    var author = Object.assign({}, this.state.author);
    author[event.target.name] = event.target.value;
    this.setState({ author: author, dirty: true });
  },

  render: function() {
    return (
      //   need one top level tag
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}
        />
      </div>
    );
  }
});

// Using withRouter higher order component to wrap ManageAuthorPage
// to notify the user when attempting to navigate away when the form is dirty.
module.exports = ManageAuthorPage;
