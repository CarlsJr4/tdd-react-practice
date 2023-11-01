type PropTypes = {
  children: string;
};

const TextButton = ({ children }: PropTypes) => {
  return <button>{children}</button>;
};

export default TextButton;
