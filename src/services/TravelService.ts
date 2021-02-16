import axios from 'axios';

import OceanInfo from 'types/OceanInfo';
class TravelService {
  async getSomethingTravel() {
    const res = await axios.get(
      'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList',
      {
        params: {
          serviceKey: decodeURIComponent(process.env.REACT_APP_TRAVEL_KEY!),
          MobileApp: 'AppTest',
          MobileOS: 'ETC',
          pageNo: 1,
          numOfRows: 300,
          contentTypeId: 12,
          cat1: 'A01',
          cat2: 'A0101',
          cat3: 'A01011200',
          listYN: 'Y',
        },
      },
    );

    if (!res?.data?.response?.body?.items?.item) {
      throw res;
    }

    return res.data.response.body.items.item.map(item => ({
      name: item.title,
      imageSrc: item.firstimage,
      description: item.addr1,
    })) as OceanInfo[];
  }
}

export default new TravelService();
