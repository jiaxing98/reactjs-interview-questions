import { Answer } from '#/components/custom/Answer'
import { Page } from '#/components/custom/Page'
import { Question } from '#/components/custom/Question'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/q1')({
  component: RouteComponent,
})

//TODO:
function countOccurrence(text: string): Record<string, number> {
  return {}
}

function RouteComponent() {
  const navigate = Route.useNavigate()

  const occurrence = countOccurrence('hello redone')
  const expectedOutput = {
    h: 1,
    e: 3,
    l: 2,
    o: 2,
    r: 1,
    d: 1,
    n: 1,
  }

  return (
    <Page onNext={() => navigate({ to: '/q2' })}>
      <Question
        order={1}
        description='Write a program to get the occurrence of each character in a string "hello redone"'
      >
        <code>{JSON.stringify(expectedOutput, null, 2)}</code>
      </Question>
      <Answer>
        <code>{JSON.stringify(occurrence, null, 2)}</code>
      </Answer>
    </Page>
  )
}
