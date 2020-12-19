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
}

export default new RakutenService();
