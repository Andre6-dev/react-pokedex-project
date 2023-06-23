import React, { Component } from "react"

// Component to show container
const Wrapper = (Component: React.FC) => () => {
  return (
    <div className="content">
      <Component />
    </div>
  )
}

export default Wrapper
