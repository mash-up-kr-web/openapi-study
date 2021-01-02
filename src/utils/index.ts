const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getTwoRandomInts = () => {
  const result: Array<number> = [getRandomInt(0, 9)];
  let randomInt: number = getRandomInt(0, 9);

  while (result[0] === randomInt) {
    randomInt = getRandomInt(0, 9);
  }
  result.push(randomInt);

  return result;
};

export const toDateFormat = (date: Date) => {
  const year = date.getFullYear();
  let month = `${date.getMonth() + 1}`;
  let day = `${date.getDate()}`;

  // 한자리수일 경우 0을 채워준다.
  if (month.length === 1) {
    month = '0' + month;
  }
  if (day.length === 1) {
    day = '0' + day;
  }
  return year + '' + month + '' + day;
}