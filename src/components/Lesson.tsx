import Link from 'next/link'
import { FC } from 'react'
import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { toTitle } from '../utils/to-title'
import { useRouter } from 'next/router'
import { EventPageParams } from '../pages/event/lesson/[slug]'

import classNames from 'classnames'

export interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

const DATE_SEPARATOR = "' • '"

export const Lesson: FC<LessonProps> = (props) => {
  const router = useRouter()

  const { slug } = router.query as never as EventPageParams

  const isActiveLesson = slug === props.slug

  return (
    <Link href={`/event/lesson/${props.slug}`}>
      <a className="group">
        <span className="text-gray-300">
          {toTitle(
            format(
              props.availableAt,
              `EEEE${DATE_SEPARATOR}d' de 'MMMM${DATE_SEPARATOR}k'h'mm`,
              { locale: ptBR }
            )
          )}
        </span>

        <div
          className={classNames(
            'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',
            {
              'bg-green-500': isActiveLesson,
            }
          )}
        >
          <header className="flex items-center justify-between">
            {isPast(props.availableAt) ? (
              <span
                className={classNames(
                  'text-sm font-medium flex items-center gap-2',
                  isActiveLesson ? 'text-white' : 'text-blue-500'
                )}
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}

            <span
              className={classNames(
                'uppercase text-xs rounded px-2 py-0.5 text-white border font-bold',
                isActiveLesson ? 'border-white' : 'border-green-300'
              )}
            >
              {props.type === 'live' ? 'Ao vivo' : 'Aula prática'}
            </span>
          </header>

          <strong
            className={classNames(
              'mt-5 block',
              isActiveLesson ? 'text-white' : 'text-gray-200'
            )}
          >
            {props.title}
          </strong>
        </div>
      </a>
    </Link>
  )
}
