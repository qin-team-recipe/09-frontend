import Image from "next/image"

const RecipeCard = () => {
  return (
    <Image
      className="h-full w-full"
      src="/sampleRecipe.png"
      alt="sample recipe"
      width={171}
      height={171}
    />
  )
}

export default RecipeCard
