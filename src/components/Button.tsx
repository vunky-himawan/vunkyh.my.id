const Button = ({
  children,
  onClick,
  optionalStyles,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  optionalStyles?: string;
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-md ${optionalStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
