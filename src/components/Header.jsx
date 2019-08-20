import React from "react";

const Header = props => (
    <h1>{props.myTitle}</h1>
)

/* class Header extends React.Component {
  render(props) {
      return <h1>{myTitle}</h1>
    //return <h1>My Todo App</h1>;
  }
} */

export default Header;
