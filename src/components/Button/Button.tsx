interface ButtonProps {
  className: string;
  actionOnClick: () => void;
}

const Button = ({
  className,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type="button"
      className={`button${className ? `${className}` : ""}`}
      onClick={actionOnClick}
    ></button>
  );
};

export default Button;
