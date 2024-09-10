// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response)=>{
//     if(!response.ok){ throw new Error(`response Error ${response.status}`)}
//     return response.json()
//   })
//   .then((users)=>{
//     if(!users){ throw new Error(`none result`)}
//     return users.map((user)=>{user.address.zipcode})
//   })
//   .then(console.log)
//   .catch(console.error)

// ES8 async await
  const printZipcode = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    return users;
  }

  printZipcode()
  .then(console.log)
  .then(console.error)
  