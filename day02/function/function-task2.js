// 1) 0, 1을 마구잡이로 5개 전달했을 때,
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개
function getCountZeroAndOne(num1, num2, num3, num4, num5){
  let countZero = 5;
  let countOne = 0;
  if(num1){ countOne++ };
  if(num2){ countOne++ };
  if(num3){ countOne++ };
  if(num4){ countOne++ };
  if(num5){ countOne++ };
  countZero -= countOne;
  return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
}


function getCountZeroAndOne(num1, num2, num3, num4, num5){
  let countZero = 5;
  let countOne = 0;
  num1 && countOne++
  num2 && countOne++
  num3 && countOne++
  num4 && countOne++
  num5 && countOne++
  countZero -= countOne;
  return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
}

console.log(getCountZeroAndOne(0, 1, 0, 0, 1));

function getCountZeroAndOne(...numbers){
  let countZero = 5;
  let countOne = 0;
  for(let i = 0; i < numbers.length; i++){
    numbers[i] && countOne++;
  }
  countZero -= countOne;
  return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
}

console.log(getCountZeroAndOne(0, 1, 0, 0, 1));


// 2) 사용자가 0, 1을 마구잡이로 입력했을 때
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개

function getCount(...numbers){
  let countZero = numbers.length;
  let countOne = 0;
  for(let i = 0; i < numbers.length; i++){
    countOne += numbers[i];  
  }
  countZero -= countOne;  
  return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
}

let result = getCount(0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0)
console.log(result);

// 1) 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수
function getValue(num1, num2){
  if(typeof(num1)!="number" |typeof(num2)!="number"){return "정수를 입력하세요"}
  if(num1==num2){return "두 수가 같습니다."}

  if(num1 > num2){
    console.log(`큰 값 ${num1}, 작은 값${num2}`);
  }else if(num2 > num1){
    console.log(`큰 값 ${num2}, 작은 값${num1}`);
  }
}
getValue(5,10);

// 2) 입력받은 3개 중 홀수만 모두 더해서 값을 주는 함수
function sumOdd(num1, num2, num3){

  let sum = 0;
  if(num1 % 2 == 1){
    sum += num1;
  }if(num2 % 2 == 1){
    sum += num2;
  }if(num3 % 2 == 1){
    sum += num3;
  }
  return sum;
}
console.log(sumOdd(3,1,2))


// 3) 입력 받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수
function sumEven(numbers){
  let sum = 0;
  for(let i = 0; i <= numbers; i++){
    if(i % 2 === 0) sum += i;
  }
  return sum;
}
console.log(sumEven(5))

// 4) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"
function minusA(value){
  let replaceValue = "";
  replaceValue = value.replaceAll("a","");
  return replaceValue;
}
console.log(minusA("가a나a다a라a"))

// 5) 입력한 값이 실수인지 정수인지 알려주는 함수
function checkNum(value){
  if(value % 1 == 0){
    console.log(`${value}는 정수입니다.`)
  }else{
    console.log(`${value}는 실수입니다.`)
  }
}
checkNum(1.14)

// 6) 입력받은 문자를 뒤집어주는 함수
function reverse(value){
  let splitSpelling = value.split("");
  let reverseSpelling = splitSpelling.reverse();
  let joinSpelling = reverseSpelling.join("");
  return joinSpelling;
}
let result = reverse("안녕하세요")
console.log(result)

// 다른 풀이 방법

// 2) 입력받은 3개 중 홀수만 모두 더해서 값을 주는 함수
// function addOdd(num1, num2, num3){
//   let result = 0;
//   num1 % 2 == 1 && (result += num1);
//   num2 % 2 == 1 && (result += num2);
//   num3 % 2 == 1 && (result += num3);
//   return result;
// }

// let result = addOdd(10, 11, 13);
// console.log(result);

// 3) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수
// ex) addEven(20) -> 1 ~ 20
// ES6 화살표 함수
// const sumEven = (limit) => {
// if(typeof(limit) != "number") return "정수를 입력하세요.";
// let result = 0;
// for(let i = 0; i <= limit; i++){
//   if(i % 2 != 0) continue;
//   result += i;
// }
// return result;
// }

// console.log(sumEven(10));

// 4) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"
// let content = "가a나a다a라a마a바";
// const removeA = (content) => {
// return content.split("a").join("");
// }
// console.log(removeA(content));

// 5) 입력한 값이 실수인지 정수인지 알려주는 함수
// const isInteger = (num) => {
// return num == parseInt(num) ? "정수" : "실수"
// }
// console.log(isInteger(10));

// 6) 입력받은 문자를 뒤집어주는 함수
// const reverse = (content) => {
// let result = "";
// for(let i = 0; i < content.length; i++){
//   result += content.charAt(content.length - i - 1);
// }
// return result;
// }

// console.log(reverse("안녕하세요"))

