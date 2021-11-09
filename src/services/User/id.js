
export default async function getUserById(id) {


  return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(req => req.json())
}