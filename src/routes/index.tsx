import { createFileRoute, Link } from '@tanstack/react-router'

export const questionRoutes = ['/q1', '/q2', '/q3', '/q4', '/q5', '/q6', '/q7'] as const

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col p-8 gap-8">
      <h1 className="font-bold text-7xl">Interview Question</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {questionRoutes.map((to, i) => (
          <Link
            key={`question-${i + 1}`}
            to={to}
            className="inline-flex w-24 h-24 p-4 justify-center items-center border-2 border-gray-300 rounded-lg"
          >
            Q{i + 1}
          </Link>
        ))}
      </div>
    </div>
  )
}
