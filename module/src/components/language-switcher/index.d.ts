import { ReactNode } from 'react';
declare type Props = {
    lang: string;
    children?: ReactNode;
    shallow?: boolean;
};
/**
 * Simple component for switching the language.
 * Set the "lang" query parameter on click whie preserves the current query parameters
 * Style it using the
 * - [data-language-switcher]
 * - [data-is-current="true"]
 *  attribute selectors or create your own component.
 * @param lang string the language to switch to. Needs to equal the key in i18n/index.
 * @param [children] React.nodes
 * @param [shallow] enable or disable shallow routing, @see https://nextjs.org/docs/routing/shallow-routing
 */
declare const LanguageSwitcher: ({ lang, children, shallow }: Props) => JSX.Element;
export default LanguageSwitcher;
