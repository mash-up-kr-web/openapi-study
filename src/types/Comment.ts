interface CommentInterface {
  id: number; //comment 고유 id
  writer: string; //comment 작성자 이름
  writerImgUrl: string; ///comment 작성자 프로필 사진
  content: string; //comment 내용
  date: number; //comment 작성된 시간. 유닉스 타임스탬프로 저장됩니다.
  postId: number; //댓글이 작성된 post의 Id
}

export default CommentInterface;
