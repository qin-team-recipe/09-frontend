import React from "react"
import RecipeCard from "@/components/RecipeCard"

const ChefDetailPage = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 md:gap-6">
      {[...Array(5)].map((_, i) => (
        <RecipeCard key={i} />
      ))}
    </div>
  )
}

export default ChefDetailPage
