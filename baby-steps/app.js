// var h1 = React.createElement("h1", null, "Hello world");
// var p = React.createElement(
//   "p",
//   null,
//   "A quick bown fox jumps iver the lazy dog"
// );
// class Custom extends React.Component {
//   render() {
//     return React.createElement("div", null, h1, p);
//   }
// }
// var what = React.createElement(Custom, null);
// var where = document.getElementById("content");

// ReactDOM.render(what, where);

class CustomerLink extends React.Component {
  render() {
    console.log(`this.props ${this.props}`);
    return React.createElement("a", this.props, this.props.linktext);
  }
}

var myLink = React.createElement(
  "div",
  null,
  React.createElement(CustomerLink, {
    href: "https://www.google.com",
    linktext: "google",
    title: "google"
  }),
  React.createElement(CustomerLink, {
    href: "https://www.facebook.com",
    linktext: "facebook",
    title: "facebook"
  }),
  React.createElement(CustomerLink, {
    href: "https://www.youtube.com",
    linktext: "youtube",
    title: "youtube"
  })
);

// var what = React.createElement(Custom, null);
var where = document.getElementById("content");

ReactDOM.render(myLink, where);
