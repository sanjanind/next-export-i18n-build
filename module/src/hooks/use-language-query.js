import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSelectedLanguage from './use-selected-language';
let passedQuery;
/**
 * Returns a react-state which is a queryObject containing an exsisting query and a query string with the current selected
 * language (or the passed forced language).
 * Reason: We want to preserve an existing query string.
 * Usage: LanguageSwitcher with forceLang param and all links without forceLang param
  * @param [forceLang] string to override the selected language
 * @returns queryObject react-state as ParsedUrlQueryInput
 */
export default function useLanguageQuery(forceLang) {
    const { lang } = useSelectedLanguage();
    const router = useRouter();
    const [value, setValue] = useState();
    // keep passed parameters
    passedQuery = {};
    if (router.query) {
        let query = router.query;
        const keys = Object.keys(query);
        keys.forEach((key, index) => {
            passedQuery[key] = query[key];
        });
    }
    // set lang if one of the dependencies is changing
    useEffect(() => {
        setValue({
            ...passedQuery,
            lang: forceLang || lang || passedQuery['lang'],
        });
    }, [forceLang, lang]);
    return [value];
}
