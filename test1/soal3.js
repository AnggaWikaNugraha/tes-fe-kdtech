function checkReverseIsSame(s) {
  let isTrue = false;
  let isBreak = false;
  let stringArray = s.split('');
  let stringArrayReverse = s.split('').reverse();
  // console.log(stringArray)
  // console.log(stringArrayReverse)
  let i = 0;
  do {
    if (i >= stringArray.length - 1) {
      isBreak = true
    }
    if (stringArray[i] === stringArrayReverse[i]) {
        isTrue = true;
      } else {
      isTrue = false
      isBreak = true;
    }
    i++;
  } while (!isBreak)

  return isTrue;
}

console.log(checkReverseIsSame('katak')) // true
console.log(checkReverseIsSame('angga')) // false