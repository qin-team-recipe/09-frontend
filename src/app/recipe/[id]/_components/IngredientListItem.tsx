import { TablerShoppingCartPlus } from "@/components/icon/TablerShoppingCartPlus"

type Props = {
  name: string
}

export const IngredientListItem = ({ name }: Props) => {
  return (
    <div className="flex items-center border-b py-2 pl-4 pr-2">
      <p>{name}</p>
      <button className="ml-auto rounded-full p-2 hover:bg-gray-300">
        <TablerShoppingCartPlus height={20} width={20} stroke="#6F6E77" />
      </button>
    </div>
  )
}
