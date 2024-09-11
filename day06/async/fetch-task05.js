// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고
// 알파벳 중에 A의 개수를 세서 콘솔 출력

const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users; 
}

getUser()
  .then((users)=> users.map((user)=>user.address.city))
  .then((cities)=>cities.map((city)=>city.toUpperCase()))
  .then((changedCity)=>changedCity.join(""))
  .then((totalCities)=>{
    const count = totalCities.split("").filter((char)=> char === "A").length;
    return count;
  })
  .then(console.log)
  .catch(console.error)
 

