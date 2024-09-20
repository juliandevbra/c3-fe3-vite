import ErrorBoundary from "../Components/ErrorBoundary";

const withErrorBoundary = (WrappedComponent) => {
  return (props) => {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};
export default withErrorBoundary;
