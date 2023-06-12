import type { SVGProps } from "react"

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5833 7.16673C11.4525 6.31506 12.3333 5.29423 12.3333 3.95839C12.3333 3.10749 11.9953 2.29144 11.3936 1.68976C10.7919 1.08808 9.97586 0.750061 9.12496 0.750061C8.09829 0.750061 7.37496 1.04173 6.49996 1.91673C5.62496 1.04173 4.90163 0.750061 3.87496 0.750061C3.02406 0.750061 2.208 1.08808 1.60632 1.68976C1.00465 2.29144 0.666626 3.10749 0.666626 3.95839C0.666626 5.30006 1.54163 6.32089 2.41663 7.16673L6.49996 11.2501L10.5833 7.16673Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
