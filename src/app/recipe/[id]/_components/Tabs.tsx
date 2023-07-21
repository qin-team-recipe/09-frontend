import { Children, cloneElement, ReactElement } from "react"

type Props = {
  activePath: string
  children: ReactElement[]
}

export const Tabs = ({ activePath, children }: Props) => {
  const activeClassName = "border-[#1A1523] font-bold"
  const nonActiveClassName = "border-[#E4E2E4]"

  return (
    <nav className="flex">
      {Children.map(children, (child: ReactElement) =>
        cloneElement(child, {
          className: `flex-1 border-b-2 ${child.props.className} ${
            activePath === child.props.href
              ? activeClassName
              : nonActiveClassName
          }`,
        }),
      )}
    </nav>
  )
}
