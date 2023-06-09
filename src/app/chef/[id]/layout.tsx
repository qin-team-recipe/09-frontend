import Image from "next/image"
import { BackIcon } from "@/components/BackIcon"
import ChefInfo from "@/components/ChefInfo"
import { NavigationTabs } from "@/components/NavigationTabs"
import { TomatoButton } from "@/components/TomatoButton"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full sm:max-w-2xl sm:flex-row ">
      {/* TODO: サイドメニューを実装し次第入れる */}
      <div className="hidden w-[147px] border-l md:block">サイドメニュー</div>
      <div className="flex-1 border">
        <div className="relative">
          <BackIcon />
          <Image
            className="h-full w-full"
            src="/chefImage.png"
            alt="chef image"
            width={390}
            height={520}
          />
          {/* TODO: 他の方がComponent化するので画像のみ配置、後で変更する */}
          <Image
            src="/heartIcon.png"
            className="absolute -bottom-5 right-5"
            alt="heart icon"
            width={60}
            height={60}
          />
        </div>
        {/* TODO: 値を動的に変更する */}
        <ChefInfo
          name={"山田シェフ"}
          description={
            "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より3月3日、2冊同時発売！絶賛発売中！"
          }
          follower={456}
          recipe={123}
        />

        {/* TODO: フォローしているかどうかのロジックを記載する */}
        <div className="mb-6 ml-4 mt-5">
          <TomatoButton text="フォローする" />
          {/* <OutlinedTomatoButton text="フォロー中" /> */}
        </div>

        <NavigationTabs />
        {children}
      </div>
    </div>
  )
}
