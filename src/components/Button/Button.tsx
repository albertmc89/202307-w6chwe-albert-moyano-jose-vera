interface ButtonProps {
  className: string;
}

const Button = ({ className }: ButtonProps): React.ReactElement => {
  return (
    <button
      type="button"
      className={`button${className ? `${className}` : ""}`}
    ></button>
  );
};

export default Button;
