import { Locale } from 'i18n';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TravelService from 'services/TravelService';
import TravelContainer from 'components/TravelContainer';

const ResultContainer = () => {
  const { t, i18n } = useTranslation();
  const [travels, setTravels] = useState<any[]>([]);

  const onClick = useCallback(async () => {
    const res = await TravelService.getTravelInfo({
      contentTypeId: 12, //관광지
      areaCode: 1, //서울
      locale: Locale[i18n.language],
    });
    setTravels(Array.isArray(res) ? res : []);
  }, [i18n.language]);

  return (
    <div>
      <button id="result" onClick={onClick}>
        {t('checkResult')}
      </button>
      {travels.map(t => (
        <TravelContainer {...t} />
      ))}
    </div>
  );
};

export default ResultContainer;
