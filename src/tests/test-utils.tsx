import React from 'react'
import {render} from '@testing-library/react'
import '../libs/i18n'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}