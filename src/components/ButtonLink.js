import React from "react"

const ButtonLink = ({ onPress, children, ...props }) => (
  <a
    role="button"
    tabIndex="0"
    style={{ display: "inline-block" }}
    onTouchStart={onPress}
    onMouseDown={onPress}
    {...props}
  >
    {children}
  </a>
)

export default ButtonLink
