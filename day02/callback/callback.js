// 2개의 정수를 더해서 출력
const add = (num1, num2, callback) => {
  callback(num1 + num2) 
}

const print = (value) => {
  console.log(value);
}

add(10, 20, print)