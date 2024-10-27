import React from 'react'
import {render} from '@testing-library/react'
import '../libs/i18n'
import { MenuContextProvider } from '../contexts/MenuContext'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <MenuContextProvider>
      {children}
    </MenuContextProvider>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}