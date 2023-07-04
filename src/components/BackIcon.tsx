"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const BackIcon = () => {
  const router = useRouter()

  return (
    <Image
      onClick={() => router.back()}
      className="absolute left-4 top-4 cursor-pointer"
      src="/back.svg"
      alt="back icon"
      width={32}
      height={32}
    />
  )
}
