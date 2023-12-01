import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    render() {
        // if error, render this
        if (this.state.hasError) {
            return <h1>404 {
                this.props.location.pathname
            } not found. Contact Admin.
            </h1>;
        }

        // if no error, render children untouched
        return this.props.children;
    }
}