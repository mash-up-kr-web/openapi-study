declare global {
  interface Window {
    kakao: any;
  }
}

interface AddressType {
  lat: string;
  lon: string;
}

class KakaoMapService {
  private isLoaded: boolean = false;

  constructor() {
    this.loadScript();
  }

  private loadScript() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${'7a8b1fae0d163baabaf79a15fff12752'}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        this.isLoaded = true;
      });
    };
  }

  public async getLatlngFromAddress(address: string): Promise<AddressType> {
    if (!this.isLoaded) {
      throw new Error(
        '카카오 api가 script에 로드되는데 약간의 시간이 걸려요. 바로 호출하지 말아주세요.',
      );
    }

    const geocoder = new window.kakao.maps.services.Geocoder();

    const res: AddressType = await new Promise((resolve, reject) => {
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          return resolve({
            lat: result[0].y,
            lon: result[0].x,
          });
        } else {
          return reject(status);
        }
      });
    });

    return res;
  }
}

export default new KakaoMapService();
