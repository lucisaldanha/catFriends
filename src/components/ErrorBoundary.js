import React, {Component} from 'react';

// declaring error boundary as a class component
// it works as JavaScript catch {} block, but for components
class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    // adding a lifecycle method to catch error thrown by a descendant component
    // it receives as a parameter the thrown error and returns a value to update state.
    static getDerivedStateFromError(error) {
        //Update state so next render will show fallback UI, <h1>
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            // We can render any custom fallback UI
            return <h1 class="cooltitle">Ooops, something went wrong. Sorry about that!</h1>
        } else {
            // if no error is thrown, it renders children component normally
            return this.props.children;
        }
    }
};

export default ErrorBoundary;