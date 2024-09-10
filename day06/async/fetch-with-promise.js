fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if(!response.ok){ throw new Error(`response Error ${response.status}`)}
    return response.json()
  })
  .then((posts)=>{
    if(!posts){ throw new Error(`none result`)}
    posts.forEach(({id, title}) => {
      console.log(id,title)
    })
  })
  .catch((err)=>{
    console.error(err)
  })

// 비구조화 할당(ES6)
const user = {
  name : "김태혁",
  age : 27,
  address : "경기도 수원",
}

const {name, age, address} = user;
console.log(name, age, address)

const [one, two, three, four, five, six] = [10, 20, 30, 40, 50, 60]
console.log(one,two)