/* External dependencies */
import axios from 'axios';
import _ from 'lodash';

class TravelService {
  /**
   * @see {@link http://api.visitkorea.or.kr/guide/inforArea.do} 데모페이지
   * @see {@link http://api.visitkorea.or.kr/guide/inforService.do} parameter타입 정보 볼 수 있는 문서
   *
   * Request
   * @params contentTypeId {number} [optional]   관광타입 constants/TravelType.ts의 ContentType 참조
   * @params cat1 {string} [optional]            대분류 constants/TravelType.ts의 Cat1 참조
   * @params cat2 {string} [optional]            중분류
   * @params cat3 {string} [optional]            소분류
   * @params areaCode {number} [optional]        지역(도, 시)
   * @params sigunguCode {number} [optional]     지역(구, 군)
   * @params numOfRows {number} [optional]       요청할 데이터 row수
   * @params pageNo {number} [optional]          페이지번호
   *
   * Response {array}
   * @return addr1 {string}                      도로명 주소.
   * @return addr2 {string}                      간략한 주소(동).
   * @return areacode {number}                   지역(도, 시)
   * @return cat1 {string}                       대분류
   * @return cat2 {string}                       중분류
   * @return cat3 {string}                       소분류
   * @return contentid {number}                  고유id
   * @return contenttypeid {number}              관광타입
   * @return firstimage {string}                 해당 장소의 썸네일1
   * @return firstimage2 {string}                해당 장소의 썸네일2
   * @return mapx {number}                       경도
   * @return mapy {number}                       위도
   * @return title {string}                      포스트? 제목
   */
  async getTravelInfo({
    contentTypeId,
    cat1,
    cat2,
    cat3,
    areaCode,
    sigunguCode,
    numOfRows = 12,
    pageNo = 1,
  }: any) {
    const result = await axios.get(
      `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=${process.env.REACT_APP_TRAVEL_KEY}&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A`,
      {
        params: {
          contentTypeId,
          cat1,
          cat2,
          cat3,
          areaCode,
          sigunguCode,
          numOfRows,
          pageNo,
        },
      },
    );

    const data = _.get(result, 'data.response.body.items.item', {});

    return data;
  }

  async getCouseInfo(
    contentId = 2557515
  ){
    const result = await axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailInfo?ServiceKey=${process.env.REACT_APP_TRAVEL_KEY}&contentTypeId=25&contentId=${contentId}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&listYN=Y`)
    
    const data = _.get(result, 'data.response.body.items.item', {});

    return data;
  }
}

export default new TravelService();
