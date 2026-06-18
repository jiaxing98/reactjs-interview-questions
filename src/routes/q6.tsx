import { Answer } from '#/components/custom/Answer'
import { Page } from '#/components/custom/Page'
import { Question } from '#/components/custom/Question'
import { createFileRoute } from '@tanstack/react-router'

interface Transaction {
  id: string
  amount: number
  status: 'SUCCESS' | 'FAILED'
  month: number
}

const transactions: Transaction[] = [
  {
    id: '1',
    amount: 120.5,
    status: 'SUCCESS',
    month: 4,
  },
  {
    id: '2',
    amount: 80,
    status: 'FAILED',
    month: 4,
  },
  {
    id: '3',
    amount: 250.25,
    status: 'SUCCESS',
    month: 5,
  },
  {
    id: '4',
    amount: 50.25,
    status: 'SUCCESS',
    month: 5,
  },
  {
    id: '5',
    amount: 50.25,
    status: 'SUCCESS',
    month: 6,
  },
  {
    id: '6',
    amount: 250.25,
    status: 'SUCCESS',
    month: 6,
  },
  {
    id: '7',
    amount: 150.25,
    status: 'FAILED',
    month: 7,
  },
]

export const Route = createFileRoute('/q6')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()

  // TODO:
  function calculateMonthlySpend(transactions: Transaction[]) {
    return ''
  }

  return (
    <Page
      onPrev={() => navigate({ to: '/q5' })}
      onNext={() => navigate({ to: '/q7' })}
    >
      <Question
        order={6}
        description={[
          'Here is an array of user transactions from an API. Write a function that calculates the total amount spent, but only for successful transactions in the current month, and format it to two decimal places.',
        ]}
      ></Question>
      <Answer>
        <div className="flex flex-row gap-4">
          <Card
            month="4"
            totalAmount="100"
          />
          <Card
            month="5"
            totalAmount="100"
          />
          <Card
            month="6"
            totalAmount="100"
          />
          <Card
            month="7"
            totalAmount="100"
          />
        </div>
      </Answer>
    </Page>
  )
}

export const Card = ({ month, totalAmount }: { month: string; totalAmount: string }) => {
  return (
    <div className="flex flex-col gap-2 p-4 border-2 rounded-lg bg-white">
      <p className="text-lg">Month: {month}</p>
      <p>Total Spent: {totalAmount}</p>
    </div>
  )
}
