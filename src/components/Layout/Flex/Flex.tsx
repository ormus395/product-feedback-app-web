import "./flex.css";

const Flex = ({ children, direction, withWrap }: any) => {
  const d = direction;
  const wrap = withWrap === "y" ? "wrap" : null;
  return <div className={`flex flex--${direction} ${wrap}`}>{children}</div>;
};

export default Flex;
