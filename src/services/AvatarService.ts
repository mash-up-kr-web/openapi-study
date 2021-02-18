import axios from 'axios';

class service {
  async getProfile(category: string, writer: string) {
    try {
      const result = await axios.get(
        `https://avatars.dicebear.com/4.5/api/${category}/${writer}.svg`,
      );
      return result.config.url;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new service();
