import { Translate, X } from 'phosphor-react'
import { useContext } from 'react'
import { MenuContext } from '../contexts/MenuContext'
import { DropdownLanguage } from './DropdownLanguage'

export function MobileAsideNav() {
  const { toggle, hidden } = useContext(MenuContext)
  function handleToggleMenu() {
    toggle()
  }

  return (
    <nav
      className={`fixed bg-neutral-100 top-0 right-0 h-screen drop-shadow-lg transition-all duration-300 ${
        hidden && 'translate-x-full'
      }`}
    >
      <div className="flex flex-col gap-8 px-12 py-8">
        <button className="w-100 flex justify-end" onClick={handleToggleMenu}>
          <X size="22"></X>
        </button>
        <a
          className="hover:text-orange-300 transition-all"
          href="#presentation"
        >
          Apresentação
        </a>
        <a className="hover:text-orange-300 transition-all" href="#projects">
          Projetos
        </a>
        <DropdownLanguage>
          Português
          <Translate size={16} weight="fill" />
        </DropdownLanguage>
      </div>
    </nav>
  )
}
