/// <reference types="node" />
import { ParsedUrlQueryInput } from 'node:querystring';
/**
 * Returns a react-state which is a queryObject containing an exsisting query and a query string with the current selected
 * language (or the passed forced language).
 * Reason: We want to preserve an existing query string.
 * Usage: LanguageSwitcher with forceLang param and all links without forceLang param
  * @param [forceLang] string to override the selected language
 * @returns queryObject react-state as ParsedUrlQueryInput
 */
export default function useLanguageQuery(forceLang?: string): readonly [ParsedUrlQueryInput | undefined];
