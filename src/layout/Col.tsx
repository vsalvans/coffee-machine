import React from "react"

const Col = ({col = 1, children}: {col: number, children: React.ReactNode}) => {
  return (
    <div className={`col-${col}`}>{children}</div>
  )
}

export default Col