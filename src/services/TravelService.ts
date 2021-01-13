import convert from 'xml-js';
import axios from 'axios';

class TravelService {
  async getSomethingTravel() {
    const res = await axios.get(
      'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword',
      {
        params: { serviceKey: process.env.REACT_APP_TRAVEL_KEY },
      },
    );
    console.log(res);
    const json = convert.xml2json(res.data);

    return json;
  }
}

export default new TravelService();
