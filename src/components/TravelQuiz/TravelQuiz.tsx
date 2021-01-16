/* External dependencies */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import classNames from 'classnames/bind';
import _ from 'lodash';

/* Internal dependencies */
import TravelService from 'services/TravelService';
import Answer from './Answer';
import styles from './TravelQuiz.module.scss';

interface QuizType {
  contentTypeId?: number;
  cat1?: string;
  cat2?: string;
  cat3?: string;
}

const cx = classNames.bind(styles);

const TYPE_LIST: QuizType[] = [
  {
    contentTypeId: 12,
    cat1: 'A01',
  },
  {
    contentTypeId: 14,
    cat1: 'A02',
  },
  {
    contentTypeId: 32,
    cat1: 'B02',
    cat2: 'B0201',
    cat3: 'B02011600',
  },
];

function TravelQuiz() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [quizList, setQuizList] = useState<any>([
    {
      answerIndex: 0,
      images: [
        'http://tong.visitkorea.or.kr/cms/resource/17/2038117_image2_1.jpg',
        'http://tong.visitkorea.or.kr/cms/resource/17/2038117_image3_1.jpg',
      ],
      questions: ['간월산', '거문오름 [세계자연유산]', '갑천', '계화도'],
    },
    {
      answerIndex: 0,
      images: [
        'http://tong.visitkorea.or.kr/cms/resource/17/2038117_image2_1.jpg',
        'http://tong.visitkorea.or.kr/cms/resource/17/2038117_image3_1.jpg',
      ],
      questions: ['간월산', '거문오름 [세계자연유산]', '갑천', '계화도'],
    },
    {
      answerIndex: 0,
      images: [
        'http://tong.visitkorea.or.kr/cms/resource/17/2038117_image2_1.jpg',
        'http://tong.visitkorea.or.kr/cms/resource/17/2038117_image3_1.jpg',
      ],
      questions: ['간월산', '거문오름 [세계자연유산]', '갑천', '계화도'],
    },
  ]);

  const quiz = useMemo(() => quizList[currentQuizIndex], [
    quizList,
    currentQuizIndex,
  ]);

  const handleClick = useCallback(
    (index: number) => {
      setShow(true);

      if (index === quiz.answerIndex) {
        setAnswer(true);
      } else {
        setAnswer(false);
      }

      setTimeout(() => {
        setShow(false);
        setAnswer(false);
        if (currentQuizIndex < quizList.length - 1) {
          setCurrentQuizIndex(prev => prev + 1);
        }
      }, 2000);
    },
    [currentQuizIndex, quiz.answerIndex, quizList.length],
  );

  useEffect(() => {
    const quizs: QuizType[] = [];

    TYPE_LIST.forEach(async (type: QuizType, index) => {
      const quizIndexs: number[] = [];

      const result = await TravelService.getTravelInfo({
        ...type,
        numOfRows: 200,
      });

      if (!_.isEmpty(result)) {
        let maxCount = 0;

        while (quizIndexs.length < 4 && maxCount < result.length) {
          const randomIndex = Math.floor(Math.random() * result.length);
          const quiz = result[randomIndex];

          if (quiz.firstimage && quiz.firstimage2) {
            quizIndexs.push(randomIndex);
          }
          maxCount++;
        }

        while (quizs.length < (index + 1) * 3) {
          const answerIndex = Math.floor(Math.random() * quizIndexs.length);
          const quiz: any = {
            images: [
              result[quizIndexs[answerIndex]].firstimage,
              result[quizIndexs[answerIndex]].firstimage2,
            ],
            questions: [],
            answerIndex,
          };

          for (let i = 0; i < quizIndexs.length; i++) {
            quiz.questions.push(result[quizIndexs[i]].title);
          }

          quizs.push(quiz);
        }
      }

      if (TYPE_LIST.length - 1 === index) {
        console.log(quizs);
        setQuizList(quizs);
      }
    });
  }, []);

  return (
    <div className={cx('quiz-container')}>
      <div className={cx('images')}>
        {quiz.images.map(image => (
          <img key={image} className={cx('image')} src={image} alt="" />
        ))}
      </div>
      <div className={cx('questions')}>
        {quiz.questions.map((question, index) => (
          <div
            key={question}
            className={cx('question')}
            onClick={() => handleClick(index)}
          >
            <span>{`${index + 1}번`}</span>
            {question}
          </div>
        ))}
      </div>
      <Answer show={show} answer={answer} />
    </div>
  );
}

export default TravelQuiz;
