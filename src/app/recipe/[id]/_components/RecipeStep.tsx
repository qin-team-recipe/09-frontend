type Props = {
  instruction: string
  step: number
}

export const RecipeStep = (props: Props) => {
  const { instruction, step } = props
  return (  
    <div className="flex border-y border-[#DCDBDD] px-4 py-2">
      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#E54D2E] text-xs font-light text-white">
        {step}
      </div>
      <p className="w-[332px] pl-2 text-sm md:w-[422px]">{instruction}</p>
    </div>
  )
}
