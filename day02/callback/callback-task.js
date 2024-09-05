// 1) 두 수를 더해서 출력하기
// 2) 성과 이름을 받아서 연결하고 출력하기
// 3) 두 정수의 곱셈 결과를 출력하기
// 4) 성과 이름을 받아서 ooo님 환영합니다. 출력하기

const print = (value) => {
  console.log(value);
}
// const add = (num1, num2, callback) => {
//   callback(num1+num2);
// }

// const linkName = (lastName, firstName, callback) => {
//   callback(lastName + firstName);
// }

// const multiply = (num1, num2, callback) => {
//   callback(num1 * num2)
// }

// const welcome = (linkName, callback) => {
//   callback(linkName + "님 환영합니다.")
// }


// 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기

// linkName("김", "태혁", (fullName) => {
//   welcome(fullName, print)
// })

// add(10,20,print)
// linkName("김","태혁",print)
// multiply(10,20,print)
// welcome("김태혁", print)

// 1) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
const addTwoNum = (num1, num2, callback) => {
  callback(num1 + num2);
}
const checkNum = (num, callback) => {
  callback(num % 2 ==0 ? `${num}은 짝수` : `${num}은 홀수`);
}

addTwoNum(3, 5 , (addNumber)=>{
  checkNum(addNumber, print)
})

// 2) 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력
const mulTwo = (num1, num2, callback) => {
  callback(num1 * num2);
}
const multiply2 = (num, callback) => {
  callback(num * 2);
}
mulTwo(3, 5, (mulNumber) => {
  multiply2(mulNumber, print)
})

// 3) 두 정수의 값 중 작은 값을 반환하여 출력
const compare = (num1, num2, callback) => {
  if(typeof(num1) != "number" || typeof(num2) !="number") return "정수를 입력하세요."
  if(num1 == num2) return "두 수가 같습니다."
  if(num1 > num2){
    callback(`더 작은 값: ${num2}`)
  }if(num1 < num2){
    callback(`더 작은 값: ${num1}`)
  }
}
compare(10,5,print)

// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
const reverse = (text, callback) => {
  callback(text.split("").reverse().join(""))
}
reverse("안녕하세요",print)

// 5) 사용자가 입력한 값까지 누적합한 후 5의 배수인지 확인 후 출력
const sumNum = (numbers, callback) => {
  let sum = 0;
  for(let i = 0; i <= numbers; i++){
    sum += i;
  }
  callback(sum);
}

const checkFiveTimes = (num, callback) => {
  let result = num % 5 == 0 ? `${num}은 5의 배수가 맞습니다.` : `${num}은 5의 배수가 아닙니다.`
  callback(result);
}
sumNum(5,(sum)=>{
  checkFiveTimes(sum, print);
})

// 3) 두 정수의 값 중 작은 값을 반환하여 출력
// const compare = (num1, num2, callback) => {
//   let min = 0;
//   if(typeof(num1) != "number" || typeof(num2) != "number") return "정수를 입력하세요.";
//   if(num1 == num2) return "두 수가 같습니다.";
//   num1 > num2 ? min = num2 : min = num1;
//   callback(min)
// }

// compare(30, 100, print)

// // 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// const reverse = (content, callback) => {
//   let result = "";
//   for(let i = 0; i < content.length; i++){
//     result += content.charAt(content.length - i - 1);
//   }
//   callback(result);
// }

// reverse("abcdefg", print)



