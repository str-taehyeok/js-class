// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(10, 20);
// console.log(result);

// 디폴트 파라미터
// function sum(num1, num2, num3 = 0){
//   return num1 + num2 + num3;
// }

// console.log(sum(10, 20))

// 1) 숫자 5개를 받아서 모두 출력하는 함수
// function print(num1, num2, num3, num4, num5){
//   console.log(num1, num2, num3, num4, num5);
// }
// print(10,20,30,40,50)

// 2) 2개 문자열을 연결시켜주는 함수
// function initialValue(){
//   return "";
// }
// function addStr(str1, str2 = initialValue()){
//   return str1 + str2;
// }

// let result = addStr("안녕");
// console.log(result)

// 사용자가 파라미터로 입력한 값을 모두 더하기
// 
 
// function addAll(...numbers){
//   console.log(numbers[3]);
// }

// addAll(10, 20, 30, 40, 50)

// 가변 인자로 이름, 나이, 이메일을 입력받아서 출력하기
// function printUser(...users){
//   for(let i = 0; i<users.length; i++){
//     console.log(users[i]);
//   }
// }

// printUser("김태혁", 20, "italy@naver.com")

// 가변인자로 사용자가 입력한 값을 모두 더해서 값을 주는 함수
function sum(...numbers){
  let result = 0;
  for(let i=0; i<numbers.length; i++){
    result += numbers[i];
  }
  return result;
}

let result = sum(10,20,30);
console.log(result);
