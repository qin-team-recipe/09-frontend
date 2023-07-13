import { Children, cloneElement, ReactElement } from "react"

type Props = {
  activePath: string
  children: ReactElement[]
}

export const Tabs = ({ activePath, children }: Props) => {
  const activeClassName = "border-b-2 border-[#1A1523] font-bold"

  return (
    <nav className="flex [&>a]:flex-1 [&>a]:py-2.5 [&>a]:text-center [&>a]:text-sm">
      {Children.map(children, (child: ReactElement) =>
        cloneElement(child, {
          className:
            activePath === child.props.href
              ? activeClassName
              : "border-b-2 border-[#E4E2E4]",
        }),
      )}
    </nav>
  )
}
