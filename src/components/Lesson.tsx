import { CheckCircle, Lock } from 'phosphor-react'


import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' . 'd' de 'MMMM' . 'k'h'mm ", {
    locale: ptBR
  })
  
  return (
    <a href={props.slug}>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
        {isLessonAvailable ? (
                      <span className="text-sm font-medium text-blue-500 flex items-center gap-1">
                      <CheckCircle size={20}/>
                      Conteúdo liberado
                    </span>
        ): (
            <span className="text-sm font-medium text-orange-500 flex items-center gap-1">
            <Lock size={20}/>
            EM BREVE
          </span>
        )}
          <span className="text-xs font-bold rounded px-2 py-[0.125rem] text-white border border-green-300">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <span className="text-gray-200 block mt-6">
          <strong>
            {props.title}
          </strong>
        </span>
      </div>
    </a>
  )
}