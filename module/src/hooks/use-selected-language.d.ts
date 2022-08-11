/// <reference types="react" />
/**
 * Returns a react-state containing the currently selected language.
 * @returns [lang as string, setLang as SetStateAction] a react-state containing the currently selected language
 */
export default function useSelectedLanguage(): {
    readonly lang: string;
    readonly setLang: import("react").Dispatch<import("react").SetStateAction<string>>;
};
