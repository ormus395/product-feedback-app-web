import "./flex.css";

const Flex = ({ children, direction }: any) => {
  return <div className={`flex flex--${direction}`}>{children}</div>;
};

export default Flex;
