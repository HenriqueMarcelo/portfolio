import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface DropdownProps {
  children: ReactNode
}

export function DropdownLanguage({ children }: DropdownProps) {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 hover:text-orange-300 transition-all">
        {children}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-neutral-200 rounded py-4 px-4 drop-shadow border-2 border-neutral-700 arrowOnTop">
          <DropdownMenu.Item
            asChild
            className="px-4 py-2 hover:bg-neutral-300 w-full text-left"
          >
            <button onClick={() => handleChangeLanguage('pt-BR')}>
              Português
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="block" />
          <DropdownMenu.Item
            asChild
            className="px-4 py-2 hover:bg-neutral-300 w-full text-left"
          >
            <button onClick={() => handleChangeLanguage('en-US')}>
              English
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
