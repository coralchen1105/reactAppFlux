/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */
// every application has one dispatcher, only one dispatcher object through the app
// When export dispatcher object, the object is used all over the app files
var Dispatcher = require("flux").Dispatcher;

module.exports = new Dispatcher();
