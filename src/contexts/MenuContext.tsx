import { createContext, ReactNode, useState } from 'react'

interface ItemContextType {
  hidden: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

interface MenuContextProviderProps {
  children: ReactNode
}

export const MenuContext = createContext({} as ItemContextType)

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [hidden, setHidden] = useState(true)

  function open() {
    setHidden(false)
  }

  function close() {
    setHidden(true)
  }

  function toggle() {
    setHidden((val) => {
      return !val
    })
  }

  return (
    <MenuContext.Provider
      value={{
        hidden,
        open,
        close,
        toggle,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
