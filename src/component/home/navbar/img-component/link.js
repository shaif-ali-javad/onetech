import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <>
        <Link className="active link" to="/" />
      </>
    );
  }
}
export class Services extends Component {
  render() {
    return (
      <>
        <Link className="link" to="/services" />
      </>
    );
  }
}
export class About extends Component {
  render() {
    return (
      <>
        <Link className="link" to="/about" />
      </>
    );
  }
}
export class Contact extends Component {
  render() {
    return (
      <>
        <Link className="link" to="/contact" />
      </>
    );
  }
}
