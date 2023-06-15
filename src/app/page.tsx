import Image from "next/image"
import { RecipeItem } from "@/components/RecipeItem"

export default function Home() {
  return (
    <div>
      <div>注目のシェフ</div>
      <div>
        <div className="relative">
          <Image
            className="w-[148px] rounded-2xl"
            src={`/img/sampleChefTop.png`}
            width={296}
            height={448}
            alt=""
          />
          <div className="absolute bottom-2 left-3 text-xl font-bold text-white">
            山田シェフ
          </div>
        </div>
        <div>山田シェフ</div>
        <div>山田シェフ</div>
        <div>山田シェフ</div>
      </div>
      <RecipeItem
        href={"#"}
        title={"トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン"}
        description={"ウルトラハイパー超すごいしまぶーシェフ"}
        favoriteCount={1234}
        image={`/img/sampleRecipeImage.png`}
      />
    </div>
  )
}
