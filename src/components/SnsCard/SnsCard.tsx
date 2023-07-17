import { FC } from "react"
import { ExternalLinkIcon,  InstagramIcon, LinkIcon, TwitterIcon} from '@/components/icons'

type SnsCardProps = {
  title: string
  account?: string
  follower?: number
  link?: string
  path: string
}

const getIcon = (title: string) => {
  switch (title) {
    case "Twitter":
      return <TwitterIcon />
    case "Instagram":
      return <InstagramIcon />
    case "サイト名":
      return <LinkIcon />
    default:
      return
  }
}

export const SnsCard: FC<SnsCardProps> = (props) => {
  const { title, account, follower, link, path } = props

  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between border-b border-custom-light-gray p-4"
    >
      <div className="flex items-center justify-center space-x-3">
        {getIcon(title)}
        <div className="flex flex-col">
          <p>{title}</p>
          <p className="text-sm text-custom-gray">
            {follower ? `${follower}フォロワー` : link}
          </p>
        </div>
        {account && (
          <div className="self-center pt-5">
            <p className="text-sm text-custom-gray">{account}</p>
          </div>
        )}
      </div>
      <ExternalLinkIcon />
    </a>
  )
}
