import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // error
    console.error("ErrorBoundary Caught an Error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 1000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <div>
          <h1>
            This listing has an Error. <Link to="/"> Click Here </Link> to go
            back to the Home Page or wait five seconds.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}
