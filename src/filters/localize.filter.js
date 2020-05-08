import store from '../store';
import ru from '../locales/ru.json'
import uk from '../locales/uk.json'
import en from '../locales/en.json'

const locales = {
    'ru-RU': ru,
    'uk': uk,
    'en-US': en
}

export default function localizeFilter (key) {
    const locale = store.getters.info.locale || 'ru-RU';   
    return locales[locale][key] || `[Localize error] ${key} not found`
}