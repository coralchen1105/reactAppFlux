// entry point of the application

$ = jQuery = require("jquery");
var React = require("react");
var createReactClass = require("create-react-class");
var Home = require("./components/homePage");
var About = require("./components/about/aboutPage");
var Authors = require("./components/authors/authorPage");
var Header = require("./components/common/header");
var reactDom = require("react-dom");

(function(win) {
  "use strict";
  var App = createReactClass({
    render: function() {
      var Child;

      switch (this.props.route) {
        case "about":
          Child = About;
          break;
        case "authors":
          Child = Authors;
          break;
        default:
          Child = Home;
      }

      return (
        <div>
          <Header />
          <Child />
        </div>
      );
    }
  });

  function render() {
    var route = win.location.hash.substr(1);

    reactDom.render(<App route={route} />, document.getElementById("app"));
  }

  win.addEventListener("hashchange", render);

  render();
})(window);

// React.render(<Home />, document.getElementById("app"));
