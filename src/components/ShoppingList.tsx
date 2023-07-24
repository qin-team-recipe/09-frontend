import { FC, memo, useState } from "react"
import { ChevronDownIcon } from "@/components/icon/ChevronDownIcon"
import { ChevronUpIcon } from "@/components/icon/ChevronUpIcon"
import { DotsVerticalIcon } from "@/components/icon/DotsVerticalIcon"
import { PlusIcon } from "@/components/icon/PlusIcon"
import { ShoppingCartDeleteIcon } from "@/components/icon/ShoppingCartDeleteIcon"
import { TablerToolsKitchen2Icon } from "@/components/icon/TablerToolsKitchen2Icon"
import { List } from "@/types/types"

type Props = {
  changeOrder: (currentOrder: number, direction: 1 | -1) => void
  handleCheckBoxChange: (listId: number, ingredientId: number) => void
  list: List
}

export const ShoppingList: FC<Props> = memo(
  ({ changeOrder, handleCheckBoxChange, list }) => {
    const [isShowToolTip, setIsShowToolTip] = useState(false)
    const addIngredients = () => {
      // TODO: 買うものを追加する機能の実装
    }
    const removeList = () => {
      // TODO: リストから削除する機能の実装
    }

    return (
      <div className="mt-12 py-5">
        <div className="flex justify-between px-4">
          <p className="text-xl font-bold">{list.name}</p>
          <div className="relative">
            <button onClick={() => setIsShowToolTip((prev) => !prev)}>
              <DotsVerticalIcon className="h-5 w-5" />
            </button>
            {isShowToolTip && (
              <div className="absolute right-0 z-50 flex w-[194px] flex-col gap-y-3 overflow-hidden rounded-md border bg-white p-3 shadow-md">
                <a
                  // TODO: レシピ詳細ページへのリンクを実装し次第入れる
                  href=""
                  className="flex items-center gap-x-1 text-start leading-none"
                >
                  <TablerToolsKitchen2Icon />
                  <span>レシピ詳細を見る</span>
                </a>
                <button
                  className="flex items-center gap-x-1 text-start leading-none"
                  onClick={() => changeOrder(list.order, -1)}
                >
                  <ChevronUpIcon />
                  <span>上に移動する</span>
                </button>
                <button
                  className="flex items-center gap-x-1 text-start leading-none"
                  onClick={() => changeOrder(list.order, 1)}
                >
                  <ChevronDownIcon />
                  <span>下に移動する</span>
                </button>
                <button
                  className="flex items-center gap-x-1 text-start leading-none"
                  onClick={addIngredients}
                >
                  <PlusIcon />
                  <span>買うものを追加する</span>
                </button>
                <button
                  className="flex items-center gap-x-1 text-start leading-none"
                  onClick={removeList}
                >
                  <ShoppingCartDeleteIcon />
                  <span className="text-tomato-9">リストから削除</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 divide-y border-y bg-white">
          {list.ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex min-h-[48px] items-center justify-between gap-x-2 px-4 py-2"
            >
              <input
                type="checkbox"
                className="h-6 w-6 shrink-0 appearance-none !rounded-full border-2 border-tomato-light text-mauve-8 outline-none ring-inset checked:border-[#C8C7CB] checked:bg-[#C8C7CB] checked:bg-[url('/check.svg')] checked:bg-center focus:ring-0 focus-visible:ring-1 focus-visible:ring-tomato-9 checked:focus-visible:ring-[#C8C7CB]"
                checked={ingredient.isChecked}
                onChange={() => handleCheckBoxChange(list.id, ingredient.id)}
              />
              <p
                className={`grow text-sm ${
                  ingredient.isChecked && "text-[#C8C7CB]"
                }`}
              >
                {ingredient.name}
              </p>
              {ingredient.isChecked && (
                <button className="text-tomato-light">削除</button>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  },
)
