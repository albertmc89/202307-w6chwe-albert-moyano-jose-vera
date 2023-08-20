import success from "../../assets/success.svg";

const SuccessFeedback = (): React.ReactElement => {
  return (
    <div className="success-container">
      <img className="success-image" src={success} alt="Success toast" />
      <span aria-label="success">Successfully created!</span>
    </div>
  );
};

export default SuccessFeedback;
