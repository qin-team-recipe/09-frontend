import { ArrowLeftIcon } from "src/components/ArrowLeftIcon"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full sm:max-w-2xl sm:flex-row ">
      {/* TODO: サイドメニューを実装し次第入れる */}
      <div className="w-[147px] border-l">サイドメニュー</div>
      <div className="flex-1 border">
        <div className="flex p-3">
          <a href="#" className="px-1">
            <ArrowLeftIcon className="h-5 w-5" />
          </a>
          <div className="flex-1 rounded bg-[#F4F2F4]">
            <input
              type="text"
              placeholder="シェフやレシピを検索"
              className="w-full bg-inherit p-1"
            />
          </div>
        </div>
        <nav className="flex border-b text-sm">
          <a href="#" className="flex-1 py-2 text-center">
            すべて
          </a>
          <a href="#" className="flex-1 py-2 text-center">
            レシピ
          </a>
          <a
            href="#"
            className="flex-1 border-b-2 border-[#000000] py-2 text-center font-bold"
          >
            シェフ
          </a>
        </nav>
        {children}
      </div>
    </div>
  )
}
