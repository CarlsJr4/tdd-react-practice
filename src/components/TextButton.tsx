type PropTypes = {
  children: string;
  handleClick: () => void;
};

const TextButton = ({ children, handleClick }: PropTypes) => {
  return <button onClick={() => handleClick()}>{children}</button>;
};

export default TextButton;
