import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import it from './locales/it.json'

export default createI18n({
  legacy: false,               // composition API style
  globalInjection: true,       // allows using $t in templates
  locale: 'en',                // default
  fallbackLocale: 'en',
  messages: { en, fr, it }
})
