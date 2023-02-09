import { Translate } from 'phosphor-react'

export function Header() {
  return (
    <header className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-6xl text-orange-300">Logo</div>
        <nav className="flex gap-14">
          <a className="hover:text-orange-300 transition-all" href="#">
            Apresentação
          </a>
          <a className="hover:text-orange-300 transition-all" href="#">
            Projetos
          </a>
          <button className="flex items-center gap-2 hover:text-orange-300 transition-all">
            <Translate size={16} weight="fill" />
            Português
          </button>
        </nav>
      </div>
    </header>
  )
}
