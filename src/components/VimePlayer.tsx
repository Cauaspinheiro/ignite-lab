import { DefaultUi, Player, Youtube } from '@vime/react'
import { FC } from 'react'

export interface VimePlayerProps {
  videoId: string
}

const VimePlayer: FC<VimePlayerProps> = ({ videoId }) => {
  return (
    <Player>
      <Youtube videoId={videoId} />
      <DefaultUi />
    </Player>
  )
}

export default VimePlayer
