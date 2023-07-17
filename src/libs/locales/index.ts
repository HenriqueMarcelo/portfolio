import ptBrTranslations from './pt-br'
import enUsTranslations from './en-us'
import { ResourceLanguage } from 'i18next'

export interface AppTranslationProps extends ResourceLanguage {
  translation: {
    pageTitle: string

    // Header
    presentation: string
    projects: string
    currentLanguage: string

    // Presentation
    title: string
    description1: string
    description2: string
    description3: string

    // Project
    technologiesUsed: string

    // Projects
    laravel: string
    react: string
    other: string
    react_native: string
  }
}

export default {
  'pt-BR': ptBrTranslations,
  'en-US': enUsTranslations,
}
