"use client"

import { TablerShoppingCartPlus } from "@/components/icon/TablerShoppingCartPlus"

export const AllAddToCartButton = () => {
  return (
    // TODO: カートに追加したときの処理を書く
    <button className="ml-auto mr-4 flex items-center">
      <TablerShoppingCartPlus height={20} width={20} stroke="#908E96" />
      <p className="font-bold text-[#908E96]">まとめてお買い物に追加</p>
    </button>
  )
}
