import React, { Component } from "react";
import WonderPush from "./WonderPush";

export default class Wonderpush extends Component {
  constructor(props) {
    super(props);
    WonderPush.push(["init", this.props.options]);
  }
  render() {
    return this.props.children;
  }
}
