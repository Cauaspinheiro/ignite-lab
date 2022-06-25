import Link from 'next/link'
import { FC } from 'react'
import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { toTitle } from '../utils/to-title'

export interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

const DATE_SEPARATOR = "' • '"

export const Lesson: FC<LessonProps> = (props) => {
  return (
    <Link href={`#${props.slug}`}>
      <a>
        <span className="text-gray-300">
          {toTitle(
            format(
              props.availableAt,
              `EEEE${DATE_SEPARATOR}d' de 'MMMM${DATE_SEPARATOR}k'h'mm`,
              { locale: ptBR }
            )
          )}
        </span>

        <div className="rounded border border-gray-500 p-4 mt-2">
          <header className="flex items-center justify-between">
            {isPast(props.availableAt) ? (
              <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}

            <span className="uppercase text-xs rounded px-2 py-0.5 text-white border border-green-300 fontbol">
              {props.type === 'live' ? 'Ao vivo' : 'Aula prática'}
            </span>
          </header>

          <strong className="text-gray-200 mt-5 block">{props.title}</strong>
        </div>
      </a>
    </Link>
  )
}
