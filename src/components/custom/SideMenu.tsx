import { questionRoutes } from '#/routes'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'

export function SideMenu() {
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer
        key="left"
        direction="left"
        shouldScaleBackground={false}
        noBodyStyles
      >
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="capitalize"
          >
            <Menu />
            Question Menu
          </Button>
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
          <DrawerHeader>
            <DrawerTitle>Question Menu</DrawerTitle>
            <DrawerDescription>Select your questions.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 no-scrollbar overflow-y-auto px-4">
            {questionRoutes.map((to, i) => (
              <Link
                key={`menu-question-${i + 1}`}
                to={to}
                className="w-full p-4 border-2 border-gray-300 rounded-lg"
              >
                Question {i + 1}
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
