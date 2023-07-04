import { FC } from "react"

type OutlinedTomatoButtonProps = {
  text: string
}

export const OutlinedTomatoButton: FC<OutlinedTomatoButtonProps> = ({
  text,
}) => {
  return (
    <button className="rounded border border-tomato-light px-3 py-1 text-tomato-light">
      {text}
    </button>
  )
}
