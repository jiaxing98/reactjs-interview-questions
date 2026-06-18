import { Answer } from '#/components/custom/Answer'
import { Page } from '#/components/custom/Page'
import { Question } from '#/components/custom/Question'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/q4')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()

  //TODO:
  function sum(n: number, m: number): number {
    return 0
  }

  return (
    <Page
      onPrev={() => navigate({ to: '/q3' })}
      onNext={() => navigate({ to: '/q5' })}
    >
      <Question
        order={4}
        description="You are given positive integers n and m. Define two integers as follows:"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <code>
              num1: The sum of all integers in the range [1, n] (both inclusive) that are not
              divisible by m.
            </code>
            <code>
              num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible
              by m.
            </code>
            <code>Return the integer num1 - num2.</code>
          </div>
          <div className="flex flex-col gap-4">
            <code>Test Case 1: n = 10, m = 3, output = 19</code>
            <code>Test Case 1: n = 5, m = 6, output = 15</code>
            <code>Test Case 1: n = 5, m = 1, output = -15</code>
          </div>
          <div className="flex flex-col gap-4">
            <code>Test Case 1 Explanation:</code>
            <code>
              - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1
              is the sum of those integers = 37.{' '}
            </code>
            <code>
              - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum
              of those integers = 18.
            </code>
            <code>We return 37 - 18 = 19 as the answer.</code>
          </div>
        </div>
      </Question>
      <Answer>
        <div className="flex flex-col gap-4">
          <p>Test Case 1: {sum(10, 3)}</p>
          <p>Test Case 2: {sum(5, 6)}</p>
          <p>Test Case 3: {sum(5, 1)}</p>
        </div>
      </Answer>
    </Page>
  )
}
