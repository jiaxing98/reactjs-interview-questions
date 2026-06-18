import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Answer = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="font-bold text-xl">Answer</h1>
      {children && (
        <pre className="w-full whitespace-pre-wrap wrap-break-word rounded bg-gray-100 p-4">
          {children}
        </pre>
      )}
    </div>
  )
}
