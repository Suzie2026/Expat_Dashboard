import { useState } from 'react';

/**
 * Custom hook for language switching.
 */
export const useLanguage = () => {
    const [language, setLanguage] = useState('en'); // default language

    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    return { language, switchLanguage };
};

/**
 * Custom hook for translation.
 */
export const useTranslation = (translations) => {
    const { language } = useLanguage();

    const t = (key) => {
        return translations[language][key] || key;
    };

    return { t };
};
