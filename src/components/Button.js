import React from "react";

const Button = ({
  text,
  backgroundColor,
  color,
  borderRadius,
  size,
  width
}) => {
  return (
    <button
      className={`text-${size} hover:drop-shadow-xl p-3`}
      style={{ backgroundColor, color, borderRadius, width }}
    >
      {text}
    </button>
  );
};

export default Button;
