import Link from "next/link"
import { RecipeStep } from "@/app/recipe/[id]/_components/RecipeStep"
import { Tabs } from "@/app/recipe/[id]/_components/Tabs"

export default function Recipe({ params }: { params: { id: number } }) {
  return (
    <div className="flex flex-col justify-items-stretch">
      <Tabs activePath={`/recipe/${params.id}`}>
        <Link
          className="py-2.5 text-center text-sm"
          href={`/recipe/${params.id}`}
        >
          作り方
        </Link>
        <Link
          className="py-2.5 text-center text-sm"
          href={`/recipe/${params.id}/ingredients`}
        >
          材料
        </Link>
      </Tabs>
      <div>
        {instructions.map((item, index) => (
          <RecipeStep
            key={index}
            step={item.step}
            instruction={item.instruction}
          />
        ))}
      </div>
    </div>
  )
}

const instructions = [
  {
    instruction:
      " グラタン作りの第一歩は、オーブンを予熱することです。180°Cに設定し、しっかりと加熱しましょう。",
    step: 1,
  },
  {
    instruction:
      "次に、ホワイトソースを作ります。鍋にバターを溶かし、小麦粉を加えて炒めます。少しずつ牛乳を加えながら、泡立て器でよく混ぜます",
    step: 2,
  },
  {
    instruction:
      "ホワイトソースがとろみがついたら、火から下ろし、塩、コショウ、ナツメグなどで味を調えます。お好みでチーズを加えても良いでしょう",
    step: 3,
  },
  {
    instruction:
      "グラタン皿に、ホワイトソースを底に敷きます。その上に、具材を追加します。例えば、鶏肉や野菜、マカロニなどを選びましょう",
    step: 4,
  },
  {
    instruction:
      "具材の上に、再度ホワイトソースをかけます。表面を平らにならし、最後にパン粉やチーズを振りかけます。これにより、グラタンの表面が香ばしく仕上がります。",
    step: 5,
  },
  {
    instruction:
      "グラタン皿を予熱したオーブンに入れ、約20～30分間焼きます。表面がきれいな焼き色になるまで焼き時間を調節しましょう。焼き上がったら、一度オーブンから取り出し、少し冷ましてから食べると美味しいです。",
    step: 6,
  },
]
