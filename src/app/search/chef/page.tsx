import { ChefCard } from "src/components/ChefCard"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      {/* TODO: 値を動的にする */}
      {[...Array(10)].map((_, i) => (
        <ChefCard
          key={i}
          name={"シェフ名"}
          description={
            "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。"
          }
          image={"/sampleChefCard.png"}
          recipeCount={123}
        />
      ))}
    </div>
  )
}
