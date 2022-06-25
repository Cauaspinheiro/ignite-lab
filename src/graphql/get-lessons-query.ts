import { gql } from '@apollo/client'

export interface Lesson {
  id: string
  title: string
  slug: string
  availableAt: string
  lessonType: 'live' | 'class'
}

export interface GetLessonsQueryResponse {
  lessons: Lesson[]
}

export const GET_LESSONS_QUERY = gql`
  query GetLessonsQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`
