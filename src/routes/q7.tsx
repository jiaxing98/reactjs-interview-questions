import { Page } from '#/components/custom/Page'
import { Question } from '#/components/custom/Question'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/q7')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()

  return (
    <Page onPrev={() => navigate({ to: '/q6' })}>
      <Question
        order={7}
        description="A remote village in the mountains is difficult to access and has few inhabitants. Because of their long isolation, they have split into three groups with strange behaviour patterns. The truth tellers always tell the truth, the liars always lie, and the “mixers” sometimes tell the truth and sometimes lie. A hiker who has lost their way comes across three people sitting on a bench under the village’s linden tree. Each belongs to a different group. The first person claims, “I am not a truth teller.” The second person claims, “I am not a mixer.” And the third person says, “I am not a liar.” Which groups do the three people belong to?"
      ></Question>
    </Page>
  )
}
