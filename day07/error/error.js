 // 자바스크립트의 try-catch문은 동기적으로 작동한다.
// try{
//   setTimeout(()=>{
//     ㅁㄴㅇ;
//   },2000)   // 둘 다 비동기 몇 초뒤에
//             // setInterval() // 몇초마다
// }catch(e){
//   console.log(e.name)
//   console.log(e.message)
//   console.log(e.stack)
//   console.log("잘못된 값을 입력!😢")
// }finally{

// }

setTimeout(()=>{
  try {
    ㅁㄴㅇ;
  } catch (error) {
    console.log("잘못된 값을 입력!😢")
  }
  },2000)