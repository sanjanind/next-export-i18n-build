// @ts-ignore
import de from "./translations.de.yaml";
//  @ts-ignore
import en from "./translations.en.yaml";
const i18n = {
    translations: {
        en: en.i18n,
        de: de.i18n,
    },
    defaultLang: "de",
    useBrowserDefault: true,
};
export { i18n };
