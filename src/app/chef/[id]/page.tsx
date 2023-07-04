import Image from "next/image"
import React from "react"
import { BackIcon } from "@/components/BackIcon"
import ChefInfo from "@/components/ChefInfo"

const ChefDetailPage = () => {
  return (
    <div>
      <div className="relative">
        <BackIcon />
        <Image src="/chefImage.png" alt="chef image" width={390} height={520} />
        {/* TODO: 他の方がComponent化するので画像のみ配置、後で変更する */}
        <Image
          src="/heartIcon.png"
          className="absolute -bottom-5 right-5"
          alt="heart icon"
          width={60}
          height={60}
        />
      </div>
      <ChefInfo
        name={"山田シェフ"}
        description={
          "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より3月3日、2冊同時発売！絶賛発売中！"
        }
        follower={456}
      />
    </div>
  )
}

export default ChefDetailPage
