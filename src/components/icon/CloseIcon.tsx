import type { SVGProps } from "react"

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip0_8718_4350)">
        <path d="M18 6L6 18" stroke="#1A1523" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="#1A1523" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_8718_4350">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
