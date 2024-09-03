// for(초기식; 조건식; 증감식){}
// for(let i = 0; i < 10; i++){
//   console.log(`${i+1}번 째 김태혁`);
// }



// 1~10까지 더하는 함수 출력하기
let sum = 0;
for(let i = 0; i < 10; i++){
  sum += i+1;
}
console.log(sum);

// 1~100까지 짝수만 출력하기
for(let i = 1; i <= 100; i++){
  if(i % 2 != 0){continue}
    console.log(i);
}


// 100~1까지 출력하기
for(let i = 0; i < 100; i++){
  console.log(100-i);
}

for(let i = 0; i <=100; i++){
  let even = i%2==0;
  even && console.log(i);
}

// 0~10 중 5만 빼고 출력하기
for(let i = 0; i <= 10; i++){
  if(i == 5){continue}
  else{ console.log(i)};
}

for(let i = 0; i < 9; i++){
  let result = i >= 5 ? i + 1 : i;
  console.log(result)
}

// 012340123401234 출력하기
let result = "";
for(let i = 0; i < 15; i++){
  result += i%5;
}
console.log(result);

