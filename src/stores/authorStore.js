"use strict";
// get the only dispatcher object from file
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
// broadcast events from our stores so that react compoonents are notified when stores change
var assign = require("object-assign");
// private variable
var _authors = [];
// package that work with array, number, objects, strings (iteratiing arrays)
var _ = require("lodash");

var CHANGE_EVENT = "change";

// {}: take empty new object
// EventEmitter.prototype: use as class
// group our author store and the eventEmitter prototype
var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    // whatever callback comes in it will call when "CHANGE_EVENT" on
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  // execute event listener, fire up the event listerner
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return _.find(_authors, { id: id });
  }
});

// add data to dispatcher, action parameter is from authorAction.js
Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      // call emitChange() will notify the listerner
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, { id: action.author.id });
      var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;
    default:
    // no op
  }
});

module.exports = AuthorStore;
