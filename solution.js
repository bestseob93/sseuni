/**
 * 빨강, 파랑, 초록색의 마법의 구슬이 있습니다. 마법의 구슬은 같은 색
 * 의 구슬 2개를 사용하여 다른 색 구슬 1개로 바꿀 수 있습니다. 즉,
 * 구슬 2개를 사용하여 파란색 또는 초록색 구슬 1개로 바꿀 수 있습니다.
 * 이 과정을 합성이라고 합니다. 현재 빨강, 파랑, 초록색 구슬을 각각
 * a,b,c개 가지고 있습니다. 현재 가지고 있는 구슬을 합성하여
 * 빨강, 파랑, 초록색 구슬을 각각 d,e,f개 이상 가지고 싶습니다.
 * 그것이 가능한지 불가능한지 판별하여 return하도록 solution 함수를
 * 완성해주세요. (a,b,c,d,e,f는 매개변수로 주어집니다.)
 *
 * 만약 빨강, 파랑, 초록색 구슬을 각각 4,4,0개를 가지고 있고, 합성을
 * 통해 최소 2,1,2개 이상을 가져야 한다면 그 과정은 다음과 같습니다.
 *
 * 빨강색 구슬 2개를 파랑색 구슬 1개로 합성합니다. (2,5,0)
 * 파랑색 구슬 4개를 초록색 구슬 2개로 합성합니다. (2,1,2)
 *
 * 조건을 만족하였으므로 합성을 종료한 후, true를 return합니다.
 */

function solution(a, b, c, d, e, f) {
  console.time();
  const sum = a + b + c;
  if (sum < 4) {
    console.timeEnd();
    return false;
  }
  console.timeEnd();
  return true;
}

function solution2(s) {
  console.time();
  const aIndices = [];
  const zIndices = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      aIndices.push(i);
    }

    if (s[i] === 'z') {
      zIndices.push(i);
    }
  }
  let newStr = '';
  for (let i = 0; i < aIndices.length; i++) {
    for (let j = 0; j <zIndices.length; j++) {
      if (aIndices[i] > zIndices[j]) {
        newStr = s.substring(zIndices[j] + 1, aIndices[i]);
      } else {
        newStr = s.substring(aIndices[i] + 1, zIndices[j]);
      }
      if (!newStr.includes('a') && !newStr.includes('z')) {
        result++;
      }
    }
  }
  console.timeEnd();
  return result;
}
console.log(solution2('abcz'));
console.log(solution2('abcd'));
console.log(solution2('zabzczxa'));
// console.log(solution(4, 4, 0, 2, 1, 2)); // true
// console.log(solution(3, 3, 3, 2, 2, 2)); // true
// console.log(solution(2, 2, 1, 1, 1, 2)); // false