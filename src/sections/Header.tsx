import { List, Translate } from 'phosphor-react'
import { useContext } from 'react'
import { DropdownLanguage } from '../components/DropdownLanguage'
import { MenuContext } from '../contexts/MenuContext'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation()
  const { toggle } = useContext(MenuContext)

  function handleToggleMenu() {
    toggle()
  }

  return (
    <header className="bg-neutral-900 text-white py-8 sm:py-10">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          <div className="text-6xl text-orange-400 font-logo select-none">
            ک
          </div>
          <nav className="gap-14 hidden sm:flex">
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
          <button className="sm:hidden" onClick={handleToggleMenu}>
            <List size={36} />
          </button>
        </div>
      </div>
    </header>
  )
}
