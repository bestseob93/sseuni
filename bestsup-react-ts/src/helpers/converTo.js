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
