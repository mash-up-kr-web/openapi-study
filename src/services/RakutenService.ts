/* External dependencies */
import axios from 'axios';

class RakutenService {
  async getWeather(latitude: string, longitude: string) {
    try {
      const result = await axios.get(
        `https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${longitude}&lat=${latitude}`,
        {
          headers: {
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAKUTEN_KEY,
            useQueryString: true,
          },
        },
      );

      return result.data.data[0];
    } catch (error) {
      console.error(error);
    }
  }
}

export default new RakutenService();
