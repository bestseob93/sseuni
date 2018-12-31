/**
 * convert percentage to pixel
 * @param {animation duration} value
 * @param {x, y, z} axis
 */
export const convertPercentToPx: number = (value: string, axis: string) => {
  if (typeof value === "string" && value.match(/%/g)) {
    if (axis === 'y') {
      // TODO: 추후 고정된 값으로 변경 해보기
      value = (parseFloat(value) / 100) * window.innerHeight;
    }
    if (axis === 'x') {
      value = (parseFloat(value) / 100) * window.innerWidth;
    }
  }
  return value;
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
