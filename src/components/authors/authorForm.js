"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var ReactRouter = require("react-router-dom");

var ManageAuthorPage = createReactClass({
  render: function() {
    return (
      <form>
        <h1>Manage Author</h1>
        {/* this.props.author: pass down from parent component */}
        <Input
          name="firstName"
          label="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName}
        />

        <Input
          name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          onChange={this.props.onChange}
          error={this.props.errors.lastName}
        />

        <input
          type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave}
        />
      </form>
    );
  }
});

module.exports = AuthorForm;
