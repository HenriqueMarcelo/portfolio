import { Translate, X } from 'phosphor-react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuContext } from '../contexts/MenuContext'
import { DropdownLanguage } from './DropdownLanguage'

export function MobileAsideNav() {
  const { t } = useTranslation()

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
        <button className="self-end" onClick={handleToggleMenu}>
          <X size="22"></X>
        </button>
        <a className="transition-all" href="#presentation">
          {t('presentation')}
        </a>
        <a className="transition-all" href="#projects">
          {t('projects')}
        </a>
        <DropdownLanguage>
          {t('currentLanguage')}
          <Translate size={16} weight="fill" />
        </DropdownLanguage>
      </div>
    </nav>
  )
}
