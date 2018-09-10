import React from "react"

const ButtonLink = ({ onClick, children, ...props }) => (
  <a
    role="button"
    tabIndex="0"
    style={{ display: "inline-block" }}
    onMouseDown={onClick}
    {...props}
  >
    {children}
  </a>
)

export default ButtonLink
