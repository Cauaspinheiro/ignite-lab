import { gql } from '@apollo/client'

export const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String!) {
    lesson(where: { slug: $slug }) {
      id
      description
      title
      videoId
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

export interface GetLessonBySlugQueryResponse {
  lesson: {
    id: string
    description: string
    title: string
    videoId: string
    teacher: {
      name: string
      bio: string
      avatarURL: string
    }
  }
}
