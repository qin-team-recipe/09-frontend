import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}
export const Heading = (props: Props) => {
  const { children } = props
  return (
    <div className="flex items-center justify-between px-4">{children}</div>
  )
}
