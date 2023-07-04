import React from "react"
import { SnsCard } from "@/components/SnsCard"

const ChefDetailPage = () => {
  return (
    <div>
      <SnsCard
        title="Twitter"
        follower={1234}
        account={"@shimabu_it"}
        path={"https://twitter.com/"}
      />
      <SnsCard
        title="Instagram"
        follower={1234}
        account={"@shimabu_it"}
        path={"https://www.instagram.com/"}
      />
      <SnsCard
        title="サイト名"
        link={"https://it-kingdom.com/"}
        path={"https://it-kingdom.com/"}
      />
    </div>
  )
}

export default ChefDetailPage
