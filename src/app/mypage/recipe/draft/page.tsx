import { NextPage } from "next"
import { RecipeDraftListItem } from "@/components/RecipeDraftListItem"
import { RecipeDraftItem } from "@/types/types"

// 日付のフォーマットはBEかFEどちらで行うかは要相談
const staticDrafts: RecipeDraftItem[] = [
  { id: 1, title: "グラタン", createdAt: "2023年1月1日" },
  { id: 2, title: "レシピ名未記載", createdAt: "2023年2月1日" },
  { id: 3, title: "ほげほげカレー", createdAt: "2023年3月1日" },
]
const MypageRecipeDraftPage: NextPage = () => {
  return (
    <div className="divide-y border-y bg-white">
      {staticDrafts.map((draft) => (
        <RecipeDraftListItem key={draft.id} recipeDraftItem={draft} />
      ))}
    </div>
  )
}
export default MypageRecipeDraftPage
