import { Answer } from '#/components/custom/Answer'
import { Page } from '#/components/custom/Page'
import { Question } from '#/components/custom/Question'
import { createFileRoute } from '@tanstack/react-router'
import Coffee1 from '../assets/coffee_1.jpg'
import Coffee2 from '../assets/coffee_2.jpg'
import Coffee3 from '../assets/coffee_3.jpg'
import Coffee4 from '../assets/coffee_4.jpg'
import screenshot from '../assets/screenshot.png'

const data = [
  {
    id: null,
    title: 'Lungo Coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    image: Coffee1,
    price: 200,
  },
  {
    id: 2,
    title: 'Flat White',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    image: Coffee1,
    price: 200,
  },
  {
    title: 'Americano',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    image: Coffee2,
    price: 200,
  },
  {
    id: 4,
    title: 'Espresso',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    image: Coffee2,
    price: 200,
  },
  {
    id: 5,
    title: 'Cappuccino',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    image: Coffee3,
    price: 200,
  },
  {
    id: 6,
    title: 'Macchiato',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    image: Coffee4,
    price: 200,
  },
]

export const Route = createFileRoute('/q5')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()

  return (
    <Page
      onPrev={() => navigate({ to: '/q4' })}
      onNext={() => navigate({ to: '/q6' })}
    >
      <Question
        order={5}
        description={[
          'Create the following UI design with the following data. Filter out the data with invalid or missing id, sort the item by title.',
        ]}
      >
        <a
          href="https://www.figma.com/community/file/1521850636801222788"
          target="_blank"
        >
          Coffea - Free Responsive Coffee Shop Website Template
        </a>
        <img
          src={screenshot}
          alt="screenshot"
        />
      </Question>
      <Answer></Answer>
    </Page>
  )
}
