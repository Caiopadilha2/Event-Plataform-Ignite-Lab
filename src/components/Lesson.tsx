import { CheckCircle, Lock } from 'phosphor-react';

import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Link, useParams } from 'react-router-dom';

import clasNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

  const { slug } = useParams<{ slug: string }>()
  // slug => slug da url
  // props.slug => slug da aula específica

  const isActiveLesson = slug === props.slug;

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' . 'd' de 'MMMM' . 'k'h'mm ", {
    locale: ptBR
  })
  
  
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={clasNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
        {isLessonAvailable ? (
                      <span className={clasNames('text-sm font-medium text-blue-500 flex items-center gap-1', {
                        'text-white': isActiveLesson
                      })}>
                      <CheckCircle size={20}/>
                      Conteúdo liberado
                    </span>
        ): (
            <span className="text-sm font-medium text-orange-500 flex items-center gap-1">
            <Lock size={20}/>
            EM BREVE
          </span>
        )}
          <span className={clasNames('text-xs font-bold rounded px-2 py-[0.125rem] text-white border border-green-300', {
            'border-white': isActiveLesson
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <span className={clasNames('text-gray-200 block mt-6', {
          'text-white': isActiveLesson,
        })}>
          <strong>
            {props.title}
          </strong>
        </span>
      </div>
    </Link>
  )
}