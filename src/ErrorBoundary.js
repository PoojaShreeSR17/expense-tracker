import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate error occurred
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    // Log error details
    console.log('Error captured in ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div style={{ padding: '20px', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '5px' }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    return this.props.children; // Render children when there's no error
  }
}

export default ErrorBoundary;
