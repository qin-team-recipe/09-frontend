import { FC } from "react"

type ChefInfoProps = {
  name: string
  description: string
  follower: number
}

const ChefInfo: FC<ChefInfoProps> = (props) => {
  const { name, description, follower } = props
  return (
    <div className="mx-4 mt-4">
      <p className="text-3xl font-bold">{name}</p>
      <p className="mt-4 ">{description}</p>
      <div className="mt-3.5 flex">
        <p className="mr-1 font-bold">{follower}</p>
        <p>フォロワー</p>
      </div>
    </div>
  )
}

export default ChefInfo
