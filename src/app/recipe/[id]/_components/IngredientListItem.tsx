"use client"

import { TablerShoppingCartPlus } from "@/components/icon/TablerShoppingCartPlus"

type Props = {
  name: string
}

export const IngredientListItem = ({ name }: Props) => {
  return (
    <div className="flex h-10 items-center border-b py-2 pl-4 pr-2">
      <p className="text-sm">{name}</p>
      {/* TODO: カートに追加したときの処理を書く */}
      <button className="ml-auto rounded-full p-[6px] hover:bg-gray-300">
        <TablerShoppingCartPlus height={20} width={20} stroke="#6F6E77" />
      </button>
    </div>
  )
}
