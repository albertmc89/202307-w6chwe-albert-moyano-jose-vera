import error from "../../assets/error.svg";

const ErrorFeedback = (): React.ReactElement => {
  return (
    <div className="toast-container">
      <div className="error-container">
        <img className="error-image" src={error} alt="Error toast" />
        <span aria-label="error">Error: Failed to create</span>
      </div>
    </div>
  );
};

export default ErrorFeedback;
