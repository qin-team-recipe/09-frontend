import type { SVGProps } from "react"

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12l14 0"></path>
      <path d="M5 12l6 6"></path>
      <path d="M5 12l6 -6"></path>
    </svg>
  )
}
