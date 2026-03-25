import i18next from 'i18next';

// Initialize i18next with Korean as the default language and English as the fallback
i18next.init({
  lng: 'ko', // default language
  fallbackLng: 'en', // fallback language
  resources: {
    ko: {
      translation: {
        // Your Korean translations here
      }
    },
    en: {
      translation: {
        // Your English translations here
      }
    }
  }
});

export default i18next;