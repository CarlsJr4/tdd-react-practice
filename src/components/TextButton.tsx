type PropTypes = {
  children: string;
  handleClick: () => void;
  // temperature: number;
};

const TextButton = ({ children, handleClick }: PropTypes) => {
  return <button onClick={() => handleClick()}>{children}</button>;
};

export default TextButton;
