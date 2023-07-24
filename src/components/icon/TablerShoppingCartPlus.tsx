import { SVGProps } from "react"

export function TablerShoppingCartPlus(props: SVGProps<SVGSVGElement>) {
  const { stroke } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke={stroke}
      >
        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
        <path d="M17 17H6V3H4"></path>
        <path d="m6 5l6 .429m7.138 6.573l-.143 1h-13M15 6h6m-3-3v6"></path>
      </g>
    </svg>
  )
}
