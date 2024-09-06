// 1) 1~10까지 누적합 구하기
// .reduce((accumulate, currentm index) => {}, initialValue) 
const arr = new Array(10).fill(0)//.map((data, i)=> i + 1).reduce((acc, crr, i)=>{
                                // return acc += crr;
                                // }, 0)
let sum = 0;
arr.map((data, i) => i + 1).forEach(data => sum += data)
console.log(sum);

// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
const arr2 = new Array(50).fill(0)
arr2.map((data, i) => i + 1).filter((data, i) => i % 2 ==1).map(data => data * 3).forEach(data => console.log(data))

// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
const arr3 = [10,20,30,40,50]
arr3.sort((a , b) => b - a).forEach(data => console.log(data))

// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
arr4.forEach((data, i, datas)=> datas[i] = data > 5 ? data * 2 : data);
console.log(arr4)

// const arr4 = new Array(10).fill(0).map((data,i) => i + 1).map((data) => data > 5 ? data * 2 : data);
// console.log(arr4)


// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) let arrTask1 = 1*3*5*7*9...
const arrTask1 = Array(29).fill(0).map((data, i) => i + 1).map((data) => data % 2 == 0 ? "*" : data).join("");
console.log(arrTask1)

// 6) arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아 arrTask1의 기존의 값을 2배로 변경 후
// 모든 값을 출력하기
arrTask1.split("*").map(data => data * 2).forEach(data => console.log(data))

// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력
let result3 = new Array(20).fill(0).map((data, i) => i + 1).slice(-5).reduce((acc, crr) => acc += crr);
console.log(result3)
