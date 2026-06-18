import { Answer } from '#/components/custom/Answer'
import { Page } from '#/components/custom/Page'
import { Question } from '#/components/custom/Question'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/q2')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()

  const languages = ['java', 'Typescript', 'python', 'c#']

  //TODO:
  const handleOnClick = () => {}

  return (
    <Page
      onPrev={() => navigate({ to: '/q1' })}
      onNext={() => navigate({ to: '/q3' })}
    >
      <Question
        order={2}
        description={[
          'Use `useState` to display the next programming language when next button is clicked.',
          '(bonus: Make the navigation cyclic. Clicking Next on the last item should return to the first item.)',
        ]}
      ></Question>
      <Answer>
        <div className="flex flex-col gap-4">
          <code>Programming Languages: {JSON.stringify(languages, null, 2)}</code>
          <p>My Favourite language: </p>
          <button
            className="w-fit border-black border-2 rounded-lg px-4 py-2 hover:cursor-pointer"
            onClick={handleOnClick}
          >
            Next
          </button>
        </div>
      </Answer>
    </Page>
  )
}
