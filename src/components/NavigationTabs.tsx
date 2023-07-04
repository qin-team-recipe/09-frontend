"use client"

import { useParams, usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"

export const NavigationTabs = () => {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()
  const isIncludedLink = useMemo(() => pathname.endsWith("/link"), [pathname])

  return (
    <div className="mt-4 flex w-full justify-center">
      <button
        onClick={() => router.replace(`/chef/${params.id}`)}
        className={`flex w-1/2 items-center justify-center pb-2.5 ${
          !isIncludedLink && " border-b-2 border-black"
        }`}
      >
        <p className="text-center">レシピ</p>
      </button>
      <button
        onClick={() => router.replace(`/chef/${params.id}/link`)}
        className={`flex w-1/2 items-center justify-center pb-2.5 ${
          isIncludedLink && " border-b-2 border-black"
        }`}
      >
        <p className="text-center">リンク</p>
      </button>
    </div>
  )
}
