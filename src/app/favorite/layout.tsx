import Link from "next/link"
import { MenuIcon } from "@/components/icon/MenuIcon"
import { ProfileIcon } from "@/components/icon/ProfileIcon"

export default function FavoriteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-lg border-x">
      <div className="flex justify-between border-b px-4 py-3">
        <Link href={{ pathname: "./" }}className="md:hover:opacity-90">
          <MenuIcon />
        </Link>
        <h1 className="font-bold">お気に入り</h1>
        <Link href={{ pathname: "./" }}className="md:hover:opacity-90">
          <ProfileIcon />
        </Link>
      </div>
      <div className="grid gap-y-12 p-4">
        {children}
      </div>
    </div>
  )
}
