import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { str as crc32 } from 'crc-32'
import language_config from './language-config'

i18n.use(detector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',

        // To investigate react-i18next translation issues enable this
        debug: false,

        interpolation: {
            escapeValue: false,
        },

        react: {
            wait: true,
            useSuspense: false,
            hashTransKey(defaultValue) {
                return crc32(defaultValue)
            },
        },
    })

i18n.languages = Object.keys(language_config)

export default i18n
