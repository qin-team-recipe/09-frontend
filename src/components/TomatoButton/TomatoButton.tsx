import { FC } from "react"

type TomatoButtonProps = {
  text: string
}

export const TomatoButton: FC<TomatoButtonProps> = ({ text }) => {
  return (
    <button className="rounded bg-tomato-light px-3 py-1 text-white">
      {text}
    </button>
  )
}
