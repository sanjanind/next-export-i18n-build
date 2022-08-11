import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import i18n from '../index';
/**
 * Returns a boolean react-state indicating if the current selected language equals the one passed to the hook.
 * @param currentLang string the language to check. Needs to equal the key in i18n/index.
 * @returns boolean react-state
 */
export default function useLanguageSwitcherIsActive(currentLang) {
    let i18nObj;
    i18nObj = i18n();
    const defaultLang = i18nObj.defaultLang;
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let current = false;
        if (!router.query || !router.query.lang) {
            current = defaultLang === currentLang;
        }
        else {
            current = router.query.lang === currentLang;
        }
        setIsActive(current);
    }, [currentLang, defaultLang, router.query]);
    return { isActive };
    // return [isActive] as const;
}
