import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import i18n from './../index';
/**
 * Returns a react-state containing the currently selected language.
 * @returns [lang as string, setLang as SetStateAction] a react-state containing the currently selected language
 */
export default function useSelectedLanguage() {
    let i18nObj;
    i18nObj = i18n();
    const defaultLang = i18nObj.defaultLang;
    const translations = i18nObj.translations;
    const router = useRouter();
    const [lang, setLang] = useState(defaultLang);
    // set the language if the query parameter changes
    useEffect(() => {
        if (router.query.lang && router.query.lang !== lang && translations && translations[router.query.lang]) {
            let lang = router.query.lang;
            setLang(lang);
        }
    }, [lang, router.query.lang]);
    return { lang, setLang };
    // return [lang, setLang] as const;
}
