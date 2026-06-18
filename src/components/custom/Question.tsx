import type { ReactNode } from 'react'

interface Props {
  order: number
  description: string | string[]
  children?: ReactNode
}

export const Question = ({ order, description, children }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="font-bold text-xl">{`Question ${order}`}</h1>
      {Array.isArray(description) ? (
        description.map((text) => <p key={text}>{text}</p>)
      ) : (
        <p>{description}</p>
      )}
      {children && (
        <pre className="w-full whitespace-pre-wrap wrap-break-word rounded bg-gray-100 p-4">
          {children}
        </pre>
      )}
    </div>
  )
}
