"use client"
import { FC, memo, useState } from "react"
import { DotsVerticalIcon } from "@/components/icon/DotsVerticalIcon"
import { PencilIcon } from "@/components/icon/PencilIcon"
import { TrashIcon } from "@/components/icon/TrashIcon"
import { RecipeDraftItem } from "@/types/types"

type Props = {
  recipeDraftItem: RecipeDraftItem
}

export const RecipeDraftListItem: FC<Props> = memo(({ recipeDraftItem }) => {
  const [isShowToolTip, setIsShowToolTip] = useState(false)

  const deleteDraft = () => {
    // TODO: 下書きを削除する処理を実装
  }

  return (
    <div className="flex min-h-[48px] items-center justify-between gap-x-2 px-4 py-2">
      <div className="flex flex-col gap-y-1">
        <span className="text-sm leading-tight">{recipeDraftItem.title}</span>
        <span className="text-[10px] leading-tight text-[#86848D]">
          作成日時：{recipeDraftItem.createdAt}
        </span>
      </div>
      <div className="relative">
        <button onClick={() => setIsShowToolTip((prev) => !prev)}>
          <DotsVerticalIcon className="h-5 w-5" />
        </button>
        {isShowToolTip && (
          <div className="absolute right-0 z-50 flex w-[194px] flex-col gap-y-3 overflow-hidden rounded-md border bg-white p-3 text-[#6F6E77] shadow-md">
            <a
              // TODO: レシピ詳細ページへのリンクを実装し次第入れる
              href=""
              className="flex items-center gap-x-1 text-start leading-none"
            >
              <PencilIcon stroke="#6F6E77" />
              <span>編集する</span>
            </a>
            <button
              className="flex items-center gap-x-1 text-start leading-none"
              onClick={deleteDraft}
            >
              <TrashIcon stroke="#6F6E77" />
              <span className="">下書きを削除する</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
})
