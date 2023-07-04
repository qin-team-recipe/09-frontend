"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useMemo } from "react"

export const NavigationTabs = () => {
  const params = useParams()
  const pathname = usePathname()
  const isIncludedLink = useMemo(() => pathname.endsWith("/link"), [pathname])

  return (
    <div className="mt-4 flex w-full justify-center">
      <Link
        href={`/chef/${params.id}`}
        className={`flex w-1/2 items-center justify-center pb-2.5 ${
          !isIncludedLink && " border-b-2 border-black"
        }`}
      >
        <p className="text-center">レシピ</p>
      </Link>
      <Link
        href={`/chef/${params.id}/link`}
        className={`flex w-1/2 items-center justify-center pb-2.5 ${
          isIncludedLink && " border-b-2 border-black"
        }`}
      >
        <p className="text-center">リンク</p>
      </Link>
    </div>
  )
}
