import { List, Translate } from 'phosphor-react'
import { useContext } from 'react'
import { DropdownLanguage } from '../components/DropdownLanguage'
import { MenuContext } from '../contexts/MenuContext'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.svg'

export function Header() {
  const { t } = useTranslation()
  const { toggle } = useContext(MenuContext)

  function handleToggleMenu() {
    toggle()
  }

  return (
    <header className="bg-neutral-900 text-white py-8 md:py-10">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" />
          <nav className="gap-14 hidden md:flex">
            <a
              className="hover:text-orange-300 transition-all"
              href="#presentation"
            >
              {t('presentation')}
            </a>
            <a
              className="hover:text-orange-300 transition-all"
              href="#projects"
            >
              {t('projects')}
            </a>
            <DropdownLanguage>
              <Translate size={16} weight="fill" />
              {t('currentLanguage')}
            </DropdownLanguage>
          </nav>
          <button className="md:hidden" onClick={handleToggleMenu} aria-label='Open the menu'>
            <List size={36} />
          </button>
        </div>
      </div>
    </header>
  )
}
