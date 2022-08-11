export declare type Dictionary = {
    [key: string]: string | Dictionary;
};
export declare type I18N = {
    translations: {
        [language: string]: Dictionary;
    };
    defaultLang: string;
    useBrowserDefault: boolean;
};
