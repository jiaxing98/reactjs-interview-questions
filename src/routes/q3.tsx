import { Answer } from '#/components/custom/Answer'
import { Page } from '#/components/custom/Page'
import { Question } from '#/components/custom/Question'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/q3')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()

  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setCount(count + 1)
  }

  //TODO:
  useEffect(() => {
    toast('Event has been created', {
      description: `Count`,
    })
  }, [])

  return (
    <Page
      onPrev={() => navigate({ to: '/q2' })}
      onNext={() => navigate({ to: '/q4' })}
    >
      <Question
        order={3}
        description="Use `useEffect` to show a toast whenever count changes after clicking the button. The toast should display the latest count. Do not show a toast on the initial page render."
      ></Question>
      <Answer>
        <div className="flex flex-col gap-4">
          <p>Count: {count}</p>
          <button
            className="w-fit border-black border-2 rounded-lg px-4 py-2 hover:cursor-pointer"
            onClick={handleOnClick}
          >
            Count
          </button>
        </div>
      </Answer>
    </Page>
  )
}
