"use client" // 仮置き
import { NextPage } from "next"
import { useState } from "react"
import { PlusIcon } from "@/components/icon/PlusIcon"
import { ShoppingList } from "@/components/ShoppingList"
import { IngredientLine, List } from "@/types/types"

// TODO: BEから値を取得する
const staticMyIngredients: IngredientLine[] = [
  {
    id: 1,
    name: "じゃがいも",
    isChecked: false,
  },
  {
    id: 2,
    name: "にんじん",
    isChecked: false,
  },
  {
    id: 3,
    name: "たまねぎ",
    isChecked: true,
  },
]

// TODO: BEから値を取得する
const staticLists: List[] = [
  {
    id: 1,
    name: "グラタン",
    ingredients: [
      {
        id: 11,
        name: "チーズ",
        isChecked: true,
      },
      {
        id: 12,
        name: "マカロニ",
        isChecked: false,
      },
      {
        id: 13,
        name: "ホワイトソース",
        isChecked: true,
      },
      {
        id: 14,
        name: "ブロッコリー",
        isChecked: false,
      },
    ],
    order: 1,
  },
  {
    id: 2,
    name: "カレー",
    ingredients: [
      {
        id: 21,
        name: "カレールー",
        isChecked: false,
      },
      {
        id: 22,
        name: "玉ねぎ",
        isChecked: true,
      },
      {
        id: 23,
        name: "じゃがいも",
        isChecked: false,
      },
      {
        id: 24,
        name: "にんじん",
        isChecked: false,
      },
    ],
    order: 2,
  },
]

const ShoppingListsPage: NextPage = () => {
  const [myIngredients, setMyIngredients] = useState(staticMyIngredients)
  const [lists, setLists] = useState(staticLists)

  const sortedLists = lists.sort((a, b) => a.order - b.order)

  const handlePlusClick = () => {
    // TODO: 材料を追加する機能
    // eslint-disable-next-line no-console
    console.log("plusアイコンがクリックされました")
  }

  // "じぶんメモ"のチェックボックスのトグル
  const handleMyMemoCheckBoxChange = (ingredientId: number) => {
    setMyIngredients((prevIngredients) => {
      return prevIngredients.map((prevIngredient) => {
        if (prevIngredient.id === ingredientId) {
          return {
            ...prevIngredient,
            isChecked: !prevIngredient.isChecked,
          }
        }
        return prevIngredient
      })
    })
  }

  const handleCheckBoxChange = (listId: number, ingredientId: number) => {
    setLists((prevLists) => {
      return prevLists.map((prevList) => {
        if (prevList.id != listId) {
          return prevList
        }
        return {
          ...prevList,
          ingredients: prevList.ingredients.map((prevIngredient) => {
            if (prevIngredient.id === ingredientId) {
              return {
                ...prevIngredient,
                isChecked: !prevIngredient.isChecked,
              }
            }
            return prevIngredient
          }),
        }
      })
    })
  }

  // 順番の並び替え
  const changeOrder = (currentOrder: number, direction: 1 | -1) => {
    // 1番上・1番下のリストの場合は何もしない
    if (
      (direction === -1 && currentOrder === 1) ||
      (direction === 1 && currentOrder === lists.length)
    ) {
      return
    }
    // TODO: 実際にはエンドポイントを叩く？
    setLists((prevLists) => {
      return prevLists.map((prevList) => {
        if (prevList.order === currentOrder) {
          return {
            ...prevList,
            order: prevList.order + direction,
          }
        }
        if (prevList.order === currentOrder + direction) {
          return {
            ...prevList,
            order: prevList.order - direction,
          }
        }
        return prevList
      })
    })
  }

  return (
    <div>
      <div className="py-5">
        <div className="flex justify-between px-4">
          <p className="text-xl font-bold">じぶんメモ</p>
          <button onClick={handlePlusClick}>
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-2 divide-y border-y bg-white">
          {myIngredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex min-h-[48px] items-center justify-between gap-x-2 px-4 py-2"
            >
              <input
                type="checkbox"
                className="h-6 w-6 cursor-pointer rounded-full border-2 border-tomato-light text-mauve-8 outline-none ring-inset focus:ring-0 focus-visible:ring-1 focus-visible:ring-tomato-9 checked:focus-visible:ring-mauve-9"
                checked={ingredient.isChecked}
                onChange={() => handleMyMemoCheckBoxChange(ingredient.id)}
              />
              <p className="grow text-sm">{ingredient.name}</p>
              {ingredient.isChecked && (
                <button className="text-tomato-light">削除</button>
              )}
            </div>
          ))}
        </div>
      </div>
      {sortedLists.map((list) => (
        <ShoppingList
          key={list.id}
          changeOrder={changeOrder}
          handleCheckBoxChange={handleCheckBoxChange}
          list={list}
        />
      ))}
    </div>
  )
}
export default ShoppingListsPage
