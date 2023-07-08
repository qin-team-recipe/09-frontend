export type FeaturedChefType = {
  name: string
  image: string
  path: string
}

export type TrendingRecipeType = {
  title: string
  description: string
  favoriteCount: number
  image: string
  path: string
}

export type ChefType = {
  name: string
  description: string
  image: string
  path: string
  recipeCount: number
}

export type IngredientLine = {
  id: number
  name: string
  isChecked: boolean
}

export type List = {
  id: number
  name: string
  ingredients: IngredientLine[]
  order: number
}
