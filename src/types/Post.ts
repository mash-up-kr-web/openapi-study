interface PostInterface {
  id: number; //post 고유 id
  writer: string; //post 작성자 이름
  writerImgUrl: string; ///post 작성자 프로필 사진
  content: string; //post 내용
  date: number; //post 작성된 시간. 유닉스 타임스탬프로 저장됩니다.
}

export default PostInterface;
