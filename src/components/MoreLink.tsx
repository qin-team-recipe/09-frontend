import Link from "next/link"
import React from "react"

type Props = {
  href: string
}
export const MoreLink = (props: Props) => {
  const { href } = props
  return (
    <Link
      href={{ pathname: href }}
      className="text-base font-bold text-[#908E96]"
    >
      もっと見る
    </Link>
  )
}
