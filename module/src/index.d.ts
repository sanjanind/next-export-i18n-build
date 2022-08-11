/**
 * The entry files for the separated hooks
 */
import { I18N } from "./types";
/**
 * Imports the translations addes by the user in "i18n/index",
 * veryfies the tranlsations and exposes them
 * to the custom hooks
 * @returns the translations and the default language as defined in "i18n/index"
 */
declare const i18n: () => I18N | Error;
export default i18n;
