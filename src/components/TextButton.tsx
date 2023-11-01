type PropTypes = {
  children: string;
  handleClick: (x: number) => number;
};

const TextButton = ({ children, handleClick }: PropTypes) => {
  return <button onClick={() => handleClick(3)}>{children}</button>;
};

export default TextButton;
