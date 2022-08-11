import { useRouter } from "next/router";
import { useCallback } from "react";
import i18n from "./../index";
import useSelectedLanguage from "./use-selected-language";
import Mustache from "mustache";
/**
 * Provides the t() function which returns the value stored for this given key (e.g. "i18n.ui.headline")
 * in the translation file.
 * The return value can be a string, a number, an array or an object.
 * In case there is no entry for this key, it returns the key.
 * @returns t(key: string): any function
 */
const useTranslation = (lang) => {
    const router = useRouter();
    let i18nObj;
    i18nObj = i18n();
    const translations = i18nObj.translations;
    const defaultLang = i18nObj.defaultLang;
    const language = lang || useSelectedLanguage().lang || defaultLang;
    // const [lang] = useSelectedLanguage();
    /**
     * Returns the value stored for this given key (e.g. "i18n.ui.headline")  in the translation file.
     * The return value can be a string, a number, an array or an object.
     * In case there is no entry for this key, it returns the key.
     * @param key the key for looking up the translation
     * @param view the mustache view for interpolating the template string
     * @returns the value stored for this key, could be a string, a number, an array or an object
     */
    const translation = useCallback((key, view) => {
        let value = key
            .split(".")
            .reduce((previous, current) => (previous && previous[current]) || null, translations[language]);
        let translation = value || key;
        try {
            return Mustache.render(translation, view);
        }
        catch (e) {
            return translation;
        }
    }, [language]);
    return {
        t: translation,
    };
};
export { useTranslation };
