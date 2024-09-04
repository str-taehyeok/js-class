// 브론즈
// 1) 어떤 값을 받으면 값을 출력해주는 함수
// 2) 3게의 정수를 받아서 3개 모두 빼주는 함수

// function print(...values){
//   console.log(values)
// }
// print(10);

// function addThreeNum(num1, num2, num3){
//   return num1 - num2 - num3;
// }
// console.log(addThreeNum(10,2,5));


// 실버
// 홍길동을 n번 출력해주는 함수
// n번까지 모두 더해주는 함수
// function printHong(num){
//   for(let i = 0; i < num; i++){
//     console.log("홍길동");
//   }
// }
// printHong(5);

// function addToN(...numbers){
//   let result = 0;
//   for(let i = 0; i <= numbers.length;i++){
//     result += numbers[i];
//   }
//   return result;
// }

// console.log(addToN(4));

// 골드
// 1~n까지 홀수만 출력해주는 함수
// function printOdd(num){
//   for(let i = 0; i < num; i++){
//     let odd = i % 2 == 1;
//     odd && console.log(i);
//   }
// }
// printOdd(10);
    
// 1~n까지 4의 배수만 더해주는 함수
// function sumFourTimes(limit){
//   let result = 0;
//   for(let i = 0; i <= limit; i++){
//     if(i % 4 == 0){
//       result += i;
//     }else{continue}
//   }
//   return result;
// }
// console.log(sumFourTimes(10))

// 플레티넘

// 한글을 정수로 바꿔주는 함수(일공이사 -> 1024)
// function changeHanToInt(han){
//   let hangles = "공일이삼사오육칠팔구";
//   let result = "";
//   for(let i = 0; i < han.length; i++){
//    result += hangles.indexOf(han.charAt(i));
//   }
//   return result;
// }
// console.log(changeHanToInt("일공이사"));

// 정수를 한글로 바꿔주는 함수("1024" -> "일공이사")

function changeIntToHan(numbers){
  let hangles = "공일이삼사오육칠팔구";
  let result = ""
  for(let i = 0; i < numbers.length; i++){
    result += hangles.charAt(numbers.charAt(i));
  }
  return result;
}

let result2 = changeIntToHan("0123");
console.log(result2);
// 문자열을 받아서 원하는 문자의 개수를 구해주는 함수
// function getCountOfText(text, spelling){
//   let count = 0;
//   for(let i = 0; i < text.length; i++){
//   text.charAt(i) == spelling && count++;
//   }
//   return count;
// }
// console.log(getCountOfText("apple", "p"))








