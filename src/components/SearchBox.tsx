"use client"

import { useState } from "react"
import { SearchIcon } from "@/components/icon/SearchIcon"

export const SearchBox = () => {
  const [value, setValue] = useState("")

  return (
    <div className="fixed top-0 z-10 w-full border-b border-[#EEEDEF] bg-[#F9F8F9] px-4 py-2">
      <div className="flex h-10 w-full items-center gap-3 rounded-xl bg-[#EEEDEF] px-4">
        <SearchIcon />
        <input
          type="text"
          className="w-full appearance-none bg-transparent text-base font-bold outline-none"
          placeholder="シェフやレシピを検索"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}
