import React from 'react';

class ErrorButton extends React.Component {
  state = {
    hasError: false,
  };

  componentDidUpdate(): void {
    if (this.state.hasError) {
      throw Error("This is a test error! It's okay!");
    }
  }

  render(): React.ReactNode {
    return (
      <button
        className="button"
        onClick={() => this.setState({ hasError: true })}
      >
        Error
      </button>
    );
  }
}

export default ErrorButton;
