/**
 * convert percentage to pixel
 * @param {animation duration} value
 * @param {x, y, z} axis
 */
export const convertPercentToPx: any = (value: string, axis: string) => {
  let newValue = parseInt(value, 10);
  if (typeof value === "string" && value.match(/%/g)) {
    if (axis === 'y') {
      // TODO: 추후 고정된 값으로 변경 해보기
      newValue = (newValue / 100) * window.innerHeight;
    }
    if (axis === 'x') {
      newValue = (newValue / 100) * window.innerWidth;
    }
  }
  return newValue;
}

export const convertedDate = (timestamp: any): string => {
  const date = new Date(timestamp);
  const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  const convertedDateKR = `${year}년 ${month}월 ${day}일`;
  return convertedDateKR;
};

export const normalizeHtml = (str: string): string => {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' '); // space 했을 때 유니코드나 nbsp 값 ' '로 치환
}