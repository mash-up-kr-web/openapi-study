/* External dependencies */
import axios from 'axios';

class RakutenService {
  async getWeather(latitude: string, longitude: string) {
    try {
      const result = await axios.get(
        `http://api.weatherbit.io/v2.0/current?lang=en&lon=${longitude}&lat=${latitude}&key=f48d8e3740554aa28c01c9453a90e2d6`,
      );

      return result.data.data[0];
    } catch (error) {
      console.error(error);
    }
  }

  async get16Weather() {
    try {
      const result = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=Seoul&key=97f223ae01ae490897dc11c1a09c89c2`,
        {
          headers: {
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'x-rapidapi-key':
              '30a3f2f5edmsh2bfe33c69b69314p110d63jsn667723c0e195',
            useQueryString: true,
          },
        },
      );

      return result.data.data[6]; // 6은 25일
    } catch (error) {
      console.error(error);
    }
  }
}

export default new RakutenService();
