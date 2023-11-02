import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error("Error:", error);
    console.error("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error UI here
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </div>
      );
    }
    // If no error, render the children
    return this.props.children;
  }
}

export default ErrorBoundary;
