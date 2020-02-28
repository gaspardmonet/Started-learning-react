var h1 = React.createElement("h1", null, "Hello world");
var p = React.createElement(
  "p",
  null,
  "A quick bown fox jumps iver the lazy dog"
);
class Custom extends React.Component {
  render() {
    return React.createElement("div", null, h1, p);
  }
}
var what = React.createElement(Custom, null);
var where = document.getElementById("content");

ReactDOM.render(what, where);
