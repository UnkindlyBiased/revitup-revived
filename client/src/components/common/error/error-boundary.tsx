import { Component, ErrorInfo, ReactNode } from "react";

export class ErrorBoundary extends Component<{
    children?: ReactNode;
    fallback?: ReactNode;
}> {
    state = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        console.error(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}
