import { RecipeItem } from "@/components/RecipeItem"

export default function Home() {
  return (
    <div>
      <RecipeItem
        href={"#"}
        title={"トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン"}
        description={"ウルトラハイパー超すごいしまぶーシェフ"}
        favoriteCount={1234}
        image={`/img/RecipeImage.png`}
      />
    </div>
  )
}
