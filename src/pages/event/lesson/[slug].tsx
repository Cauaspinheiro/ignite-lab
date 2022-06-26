import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Header } from '../../../components/Header'
import { Sidebar } from '../../../components/Sidebar'
import { VideoPlayer } from '../../../components/VideoPlayer'

export interface EventPageParams {
  slug: string
}

const EventPage: NextPage = () => {
  const router = useRouter()

  const { slug } = router.query as never as EventPageParams

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        <VideoPlayer lessonSlug={slug} />

        <Sidebar />
      </main>
    </div>
  )
}

export default EventPage
