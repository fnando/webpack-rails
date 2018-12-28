import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PropTypes from "prop-types";

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
  };

  render() {
    const { onClick, children } = this.props;
    return (<button onClick={onClick}>{children}</button>);
  }
}

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Some button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
