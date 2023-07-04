import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}
export const HeadingTitle = (props: Props) => {
  const { children } = props
  return <h1 className="text-xl font-bold text-[#1A1523]">{children}</h1>
}
