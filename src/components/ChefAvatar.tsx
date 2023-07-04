import Image from "next/image"
import type { FC } from "react"

type Props = {
  name: string
  image: string
}

export const ChefAvatar: FC<Props> = (props) => {
  const { name, image } = props

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={image}
          alt="chef"
          width={80}
          height={80}
        />
      </div>
      <p className="mt-2 text-center text-sm ">{name}</p>
    </div>
  )
}
