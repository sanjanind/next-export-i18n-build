/**
 * Returns a boolean react-state indicating if the current selected language equals the one passed to the hook.
 * @param currentLang string the language to check. Needs to equal the key in i18n/index.
 * @returns boolean react-state
 */
export default function useLanguageSwitcherIsActive(currentLang: string): {
    readonly isActive: boolean;
};
