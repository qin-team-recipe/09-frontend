import Link from "next/link"
import { ChefAvatar } from "src/components/ChefAvatar"
import { RecipeItem } from "src/components/RecipeItem"

export default function Home() {
  return (
    <div className="mx-auto max-w-lg border-x">
      <div className="flex justify-center border-b py-3">
        <h1 className="font-bold">お気に入り</h1>
      </div>
      <div className="grid gap-y-12 p-4">
        <div className="grid gap-y-2">
          <h2 className="text-xl font-bold">シェフ</h2>
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
            {/* TODO: 値を動的にする */}
            {[...Array(20)].map((_, i) => (
              <div key={i}> 
                <ChefAvatar
                  name={"シェフ名"}
                  image={"/sampleChefCard.png"}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-y-2">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">レシピ</h2>
            <Link
              href={{ pathname: "./" }}
              className="text-base font-bold text-[#908E96]"
            >
              もっと見る
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* TODO: 値を動的にする */}
            {[...Array(20)].map((_, i) => (
              // 共通コンポーネントに変更する
              <RecipeItem key={i} />
            ))}
          </div>
        </div>
      </div>

    </div>

  )
}
