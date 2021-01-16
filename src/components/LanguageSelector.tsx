import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../i18n';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (selected: string) => i18n.changeLanguage(selected),
    [i18n],
  );

  return (
    <div>
      <label htmlFor="언어">{t('selectLanguage')}</label>
      <select
        name="language"
        id="language"
        onChange={e => {
          changeLanguage(e.target.value);
        }}
      >
        {Object.keys(Locale).map(l => (
          <option value={l} key={l}>
            {t(l)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
