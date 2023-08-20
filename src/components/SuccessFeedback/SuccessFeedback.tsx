import success from "../../assets/success.svg";
import "./SuccessFeedback.css";

const SuccessFeedback = (): React.ReactElement => {
  return (
    <div className="toast-container">
      <div className="success-container">
        <img className="success-image" src={success} alt="Success toast" />
        <span aria-label="success">Successfully created!</span>
      </div>
    </div>
  );
};

export default SuccessFeedback;
