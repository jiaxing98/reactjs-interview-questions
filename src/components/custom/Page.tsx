import type { ReactNode } from 'react'
import { Button } from '../ui/button'
import { SideMenu } from './SideMenu'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  children: ReactNode
}

export const Page = ({ onPrev, onNext, children }: Props) => {
  return (
    <div className="flex flex-col max-w-7xl w-full h-full justify-center items-start gap-8 p-4">
      <SideMenu />
      <div className="flex flex-col flex-1 w-full gap-8 overflow-auto">{children}</div>
      <div className="flex flex-row w-full justify-between">
        {onPrev && (
          <Button
            size="lg"
            className="min-w-28 mr-auto"
            onClick={onPrev}
          >
            Previous
          </Button>
        )}
        {onNext && (
          <Button
            size="lg"
            className="min-w-28 ml-auto"
            onClick={onNext}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  )
}
