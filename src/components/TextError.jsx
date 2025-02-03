import PropTypes from "prop-types";

const TextError = ({ children }) => {
  const errorStyle = {
    color: "red",
    fontSize: "14px",
    marginTop: "4px",
    fontWeight: "bold",
  };
  return <div style={errorStyle}>{children}</div>;
};

TextError.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is required
};

export default TextError;
