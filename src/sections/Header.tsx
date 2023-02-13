import { Translate } from 'phosphor-react'
import { DropdownLanguage } from '../components/DropdownLanguage'

export function Header() {
  return (
    <header className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-6xl text-orange-400 font-logo select-none">ک</div>
        <nav className="flex gap-14">
          <a className="hover:text-orange-300 transition-all" href="#">
            Apresentação
          </a>
          <a className="hover:text-orange-300 transition-all" href="#">
            Projetos
          </a>
          <DropdownLanguage>
            <Translate size={16} weight="fill" />
            Português
          </DropdownLanguage>
        </nav>
      </div>
    </header>
  )
}
