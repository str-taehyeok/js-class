
function print(value){
  console.log(value);
}

// 1) 1~100까지 짝수만 더한 후 결과 값에 3을 곱한 후 출력
const plus = (callback) => {
  let result = 0;
  for(let i = 0; i <= 100; i++){
    i % 2 == 0 ? result += i : "" // i % 2 == 0 && (result += i);
  }
  callback(result); 
}
const multiplyBy3 = (result, callback) => {
  callback(result * 3);
}

plus((result2)=>{
  multiplyBy3(result2, print);
})

// 2) 2개의 정수 중 최소 값과 최대 값을 비교한 후 큰 값에 10을 곱해서 출력
const getMax = (num1, num2, callback) => {
  if(typeof(num2) != "number" || typeof(num2) != "number") return "정수 입력해라"
  if(num1 == num2) return "두 수 같다!"
  let result = num1 > num2 ? num1 : num2

  callback(result);
}

const multiplyBy10 = (number, callback) => {
  callback(number * 10)
} 

getMax(1, 5 ,(result2)=>{
  multiplyBy10(result2, print)
})

// 3) 결제 상품의 이름과 결제 상태를 전달 받아서 
// 결제 상태가 true일 경우 결제 완료, false인 경우 결제 취소를 출력
const checkPay = (name, check, callback) => {
  
  let result = check == true ? `${name} 결제 완료` : `${name} 결제 취소`

  callback(result)
}
checkPay("초콜릿",false,print)


// 4) 상품 가격과 총 구매한 가격의 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니라면 false 출력
// ex) 가격 1000원, 총 구매가격 5000원 == 구매 개수 5개
const getCount = (productPrice, totalPrice, callback) => {
  callback(totalPrice / productPrice);
}
const trueORFalse = (count, callback) => {
  let result = count <= 5;

  callback(result);
}

getCount(1000,5000,(count2)=>{
  trueORFalse(count2, print)
})